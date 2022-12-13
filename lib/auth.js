import jwt from "jsonwebtoken";
import User from "../models/userModel";

export const auth = async (handler) => {
  return async (req, res) => {
    try {
      const token = req.header("Authorization");
      if (!token)
        return res.status(400).json({ message: "Invalid Authentication" });

      const decode = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
      if (!decode)
        return res.status(400).json({ message: "Invalid Authentication" });

      const user = await User.findById(decode.id);
      req.user = user;
      return handler(req, res);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
