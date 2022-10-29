import { Request, Response } from "express";
import knexPg from "../../dbConnections/knexPg";

export const createUser = async (req:Request, res:Response):Promise<any> => {
  await knexPg('users').insert(req.body);
  console.log("user created new");
  res.status(201).json({ msg: "user created" });
}
