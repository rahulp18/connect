import jwt from "jsonwebtoken";

export const createAccessToken = async (payload) => {
  return jwt.sign(payload, `${process.env.NEXT_PUBLIC_JWT_SECRET}`, {
    expiresIn: "1d",
  });
};

export const createRefreshToken = async (payload) => {
  return jwt.sign(payload, `${process.env.NEXT_PUBLIC_JWT_SECRET}`, {
    expiresIn: "30d",
  });
};
