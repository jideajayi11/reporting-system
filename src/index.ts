import envConfig from "dotenv/config"; envConfig;
import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

if (!process.env.PORT) {
  process.exit(1);
}

const PORT:number = parseInt(process.env.PORT as string, 10);
const app:Application = express();


app.use(helmet());
app.use(cors());
app.use(express.json());


app.listen(PORT, () => console.log(`magic happens at ${PORT}`));

app.get("/", (req:Request, res:Response):void => { res.send("getting started with .ts") });
