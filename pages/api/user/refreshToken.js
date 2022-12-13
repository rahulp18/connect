import jwt from "jsonwebtoken";
import db from "../../../lib/mongodb";
import { createAccessToken } from "../../../lib/token";
import Users from "../../../models/userModel";
export default async function handler(req, res) {
  const { method } = req;
  db.connect();
  if (method === "POST") {
    try {
      const rf_token = req.cookies.refreshToken;

      if (!rf_token) return res.status(400).json({ message: "Please login" });

      const result = await jwt.verify(
        rf_token,
        process.env.NEXT_PUBLIC_JWT_SECRET
      );
      const user = await Users.findById(result.id);

      if (!user) return res.status(400).json({ message: "Invalid Token" });
      const accessToken = await createAccessToken({ id: result.id });
      res.json({ accessToken, user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
