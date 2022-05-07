import res from "express/lib/response.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const generateLoginToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const generateRegisterToken = (name, email, password) => {
  return jwt.sign({ name, email, password }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
    if (error) {
      res.status(400);
      throw new Error("Incorrect or expired link!");
    }

    return decodedToken;
  });
};
