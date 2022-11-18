
import * as http from "http";
import dotenv from "dotenv";
import express from "express";
// import {databaseService} from "./services/databaseService";

import Logger from "./lib/logger";
const app = express();



// initialize configurations
if(!process.env.ALREADY_SET) {dotenv.config()};

const port = process.env.SERVER_PORT;
// default route
// app.get("/", (req, res) => {
//     res.json({})
// });

const server = http.createServer(app).listen(parseInt(port || '3000',10))


server.on('listening',async ()=> {
  // await databaseService.getConnection();
  Logger.log("info",`Auth App listening on ${JSON.stringify(server.address())}`)


})

app.listen(port, () => {

   // tslint:disable-next-line:no-console
  console.log(`URMG server is started at http://localhost:${port}`);
});
