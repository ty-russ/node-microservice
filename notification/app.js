const express = require("express");
const cors = require("cors");

// IMPORT ROUTES
const routes = require("./routes/apiRoutes");

//srv comes from index js
function server(srv) {
  const app = express();
  app.use(cors());
  // app.use(cors({ 'Access-Control-Allow-Origin': 'http:localhost:8080' }));

  // MIDDLEWARES
  app.use(express.json());

  //healthcheck
  app.get("/health", (req, res) => {
    res.send("Ola!!server up and running");
  });

  // ROUTES
  //srv factory to  inject services into all incoming requests
  const exposed_services = (req, res, next) => {
    console.log("=======loading services=========", srv);
    req.service = srv();
    console.log(`srvs Load succeeded`);
    next();
  };

  app.use("/api", exposed_services, routes);

  return app;
}

module.exports = server;
