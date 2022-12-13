import { serialize } from "cookie";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    try {
      res.setHeader("Set-Cookie", [
        serialize("responseToken", "", {
          maxAge: -1,
          path: "/api/user/refreshToken",
        }),
      ]);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
