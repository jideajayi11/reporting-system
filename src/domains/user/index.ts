import { Request, Response } from "express";
import knexPg from "../../dbConnections/knexPg";
import { verifyEncoding } from "../../utilities/encrypt/withBcrypt";
import { getToken } from "../../utilities/encrypt/jwt";
import Controller from "../../utilities/controller";
import readRequest from "../../utilities/controller/readRequest";

export const userLogin = async (req:Request, res:Response):Promise<any> => {
  try {
    const users = await knexPg('users').where("email", "=", req.body?.email)
      .select();
    const user = users[0];

    if(!users.length) {
      return res.status(404).json({ msg: "user not found" });
    }

    if(!verifyEncoding(req.body?.password, user.password)) {
      return res.status(400).json({ msg: "invalid credentials" });
    }

    if(user.resetPassword) {
      return res.status(400).json({ msg: "user needs to reset password" });
    }

    delete user.password;
    delete user.resetPassword;

    const token = getToken(
      { user: user },
      { expiresIn: '2d' }
    );

    res.status(200).json({ token });
  } catch (error) {        
    res.status(500).json({ msg: "failed to login user" });
  }
}

export default new Controller({
  domain: "users",
  name: "user",
  updateWhere: ({ user }):Array<string> => ["id", user?.id],
  readRequest,
});
