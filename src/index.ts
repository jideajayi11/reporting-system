import envConfig from "dotenv/config"; envConfig;
import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import knexPg from "./dbConnections/knexPg";
import routes from "./routes";

if (!process.env.PORT) {
  process.exit(1);
}

const PORT:number = parseInt(process.env.PORT as string, 10);
const app:Application = express();


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(PORT, () => console.log(`magic happens at ${PORT}`));

app.get("/", async(req:Request, res:Response):Promise<any> => {
  const users = await knexPg('users').select();
  res.json(users);
});
