const mongoose = require("mongoose");
//require("dotenv/config");
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
};

class Database {
  constructor(config) {
    this.config = config;
  }
  connect() {
    //create database
    mongoose.connect(this.config, options, () => console.log("Connected to DB!"));
  }
  query() {
    //query
  }
}
module.exports = Database;

// module.exports = () => {
//   mongoose.connect(
//     process.env.DB_CONNECT,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: true,
//     },
//     () => console.log("Connected to DB!")
//   );
// };
