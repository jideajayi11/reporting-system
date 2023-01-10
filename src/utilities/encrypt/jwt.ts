import jwt from "jsonwebtoken";

export const getToken = (payload={}, options={}) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, options);
}
