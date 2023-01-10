import { Request, Response } from "express";
import knexPg from "../../dbConnections/knexPg";
import { AuthUserRequest } from "../../middlewares/auth";
import nodemailer from "../../services/email/nodemailer";
import sendgrid from "../../services/email/sendgrid";

interface Icontructor extends IreadRequest {
  domain: string;
  name: string;
  updateWhere: (req:AuthUserRequest) => Array<string>;
  readSelect?: Array<string>;
}

export interface IreadRequest {
  readRequest: (req:AuthUserRequest | Request) => {
    limit: string | number;
    offset: string | number;
    whereFunc: (param:any) => any;
  }
}

export default class Controller {
  domain:string;
  name:string;
  readRequest: IreadRequest["readRequest"];
  updateWhere: (req:AuthUserRequest) => Array<string>;
  readSelect?: Array<string>;

  constructor ({
    domain,
    name,
    readRequest,
    updateWhere,
    readSelect = [],
  }:Icontructor) {
    this.domain = domain;
    this.name = name;
    this.readRequest = readRequest;
    this.updateWhere = updateWhere;
    this.readSelect = readSelect;
  }

  createDomain = async (req:Request, res:Response):Promise<any> => {
    try {      
      await knexPg(this.domain).insert(req.body);
      res.status(201).json({ msg: `${this.name} created` });
    } catch (error) {
      res.status(500).json({ msg: `failed to create ${this.name}`, error });
    }
  }

  readDomain = async (req:Request, res:Response):Promise<any> => {
    try {
      sendgrid({
        to: 'jideajayi11@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>'
      });
      const { limit, offset, whereFunc } = this.readRequest(req);
      const model = knexPg(this.domain).where(whereFunc);

      let data, totalCount=null;
      if (limit===null && offset===null) {
        data = (await model.clone().select(this.readSelect))[0];
      } else {
        totalCount = (await model.clone().count())[0].count;
        data = await model.clone().select(this.readSelect).offset(offset).limit(limit);
      }

      res.status(200).json({ data, ...(totalCount ? {totalCount} : {}) });
    } catch (error) {
      res.status(500).json({ msg: `failed to read ${this.name}`, error });
    }
  }

  updateDomain = async (req:Request, res:Response):Promise<any> => {
    try {
      const rows = await knexPg(this.domain).where(...this.updateWhere(req)).update(req.body);      
      res.status(200).json({ msg: `${this.name} updated`, rows });
    } catch (error) {
      res.status(500).json({ msg: `failed to update ${this.name}`, error });
    }
  }
}
