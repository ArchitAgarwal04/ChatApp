import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", 
  });

  res.cookie("jwt", token, {
    httpOnly: true, 
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, 
  });

  console.log("JWT Token Set in Cookie");
};
