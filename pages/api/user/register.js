import db from "../../../lib/mongodb";
import Users from "../../../models/userModel";
import { serialize } from "cookie";
import bcrypt from "bcrypt";
import { createAccessToken, createRefreshToken } from "../../../lib/token";
export default async function handler(req, res) {
  db.connect();
  const { method } = req;

  if (method === "POST") {
    const { fullname, username, email, password, gender } = req.body;
    let newUserName = username.toLowerCase().replace(/ /g, "");
    const user_name = await Users.findOne({ username: newUserName });
    if (user_name) {
      return res
        .status(400)
        .json({ message: "This username is already exist." });
    }
    const user_email = await Users.findOne({ email });
    if (user_email)
      return res
        .status(400)
        .json({ message: "This email id already registerd" });

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 charecter" });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = new Users({
      fullname,
      username: newUserName,
      email,
      password: passwordHash,
      gender,
    });

    const accessToken = await createAccessToken({ id: newUser._id });
    const refreshToken = await createRefreshToken({ id: newUser._id });
    res.setHeader(
      "Set-Cookie",
      serialize("refreshToken", refreshToken, { path: "/api/refreshToken" })
    );
    await newUser.save();
    res.status(200).json({
      message: "User Register",
      accessToken,
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } else {
    res.status(400).json({ messages: "You are in get method check your api" });
  }
}
