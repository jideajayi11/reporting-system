import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { encode } from "../utilities/encrypt/withBcrypt";

export interface AuthUserRequest extends Request {
  user: {
    [key: string]: any;
  }
};

export default (req:AuthUserRequest, res:Response, next:NextFunction) => {
  const token = req.header('Authorization')?.split(/\s+/)?.[1];

  if(!token) {
    return res.status(401).json({ msg: "Authentication failed" })
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);    
    req.user = decoded.user;
    next();
  } catch(err) {
    return res.status(401).json({ msg: "Authentication failed - Token invalid" })
  }
}

export const encryptPayloadPassword = (req:Request, res:Response, next:NextFunction) => {
  if(req.body?.password) {
    req.body.password = encode(req.body.password);
  }

  next();
}
