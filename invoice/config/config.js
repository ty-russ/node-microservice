require("dotenv").config();

const config = {
  DB_URI: process.env.DB_CONNECT,
};

module.exports = config;
