import express, { Request, Response, json, urlencoded } from "express";
import routers from "./routers/route";
import morgan from "morgan";
import cors from "cors";
import winston from "./configs/winston";

const app: express.Application = express();
const port: number = 3000;

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: true }));

// HTTP 통신 중 dev단계의 로그 찍는 라이브러리
app.use(morgan("combined", { stream: winston.stream }));

// Router사용
app.use(routers);

app.listen(port, () => {
  // console.log(`SDS GateWay Server Start ${port}! \n`);
  winston.logger.info(`---------------------------------------`);
  winston.logger.info(`SDS GateWay Server Start ${port}!!!`);
});
