"use strict";
//all dependancies or majority of them need to be required in index.js as it will not get unit tested
//basically index js sets up dependancies and injects them into the server
const server = require("./app");

// ENV SETUP
require("dotenv").config();
const port = process.env.PORT;
//const port = 3000;

const config = require("./config/config");
const Database = require("./config/db");

//initiate DB
let db = new Database(config.DB_URI);
db.connect();

//IMPORT SERVICES-BUSINESSLOGIC
const srv = require("./services");

//direct injecting services into server
const app = server(srv);

// LISTENING PORT
app.listen(port, () => {
  console.log(`App Listening on port: ${port}`);
});
