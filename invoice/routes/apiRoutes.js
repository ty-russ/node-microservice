//all api routes

const express = require("express");
const router = express.Router();

const test_handler = require("../service_handlers/test_handler");

//create apiroutes
console.log("============apiRoutes================");

router.post("/addtest", test_handler.add_test);

module.exports = router;
