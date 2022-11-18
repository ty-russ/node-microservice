
import * as http from "http";
import dotenv from "dotenv";
import express from "express";
// import {databaseService} from "./services/databaseService";
import {a
import {Logger} from "./lib/logger";
const app = express();



// initialize configurations
if(!process.env.ALREADY_SET) {dotenv.config()};

const port = process.env.SERVER_PORT;
// default route
// app.get("/", (req, res) => {
//     res.json({})
// });
const logger:any = new Logger();
const server = http.createServer(app).listen(parseInt(port || '3000',10))


server.on('listening',async ()=> {
  // await databaseService.getConnection();
  logger.log("info",`Auth App listening on ${JSON.stringify(server.address())}`)


})

app.listen(port, () => {

   // tslint:disable-next-line:no-console
  console.log(`server is started at http://localhost:${port}`);
});
