import db from "../../../lib/mongodb";
import Users from "../../../models/userModel";
import bcrypt from "bcrypt";
import { createAccessToken, createRefreshToken } from "../../../lib/token";
import { serialize } from "cookie";

export default async function handler(req, res) {
  const { method } = req;
  db.connect();
  if (method === "POST") {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      if (!user)
        res.status(400).json({ message: "This email id does not exist" });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch)
        return res.status(400).json({ message: "Password mismatch" });
      const accessToken = await createAccessToken({ id: user._id });
      const refreshToken = await createRefreshToken({ id: user._id });

      res.setHeader(
        "Set-Cookie",
        serialize("refreshToken", refreshToken, {
          path: "/api/user/refreshToken",
        })
      );
      res.status(200).json({
        message: "Login successful",
        accessToken,
        user: {
          ...user._doc,
          password: "",
        },
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}
