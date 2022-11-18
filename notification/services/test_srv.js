const ctrl = require("../controllers");

async function add_test(req) {
  return new Promise(async function (resolve, reject) {
    try {
      console.log(req, "request recieved at add_test_srv successfully");

      let newTest = await ctrl.test_ctrl.add_test(req);
      return resolve(newTest);
    } catch (err) {
      console.log("===srv error===", err, "==srv error===");
      reject(err);
    }
  });
}

module.exports = {
  add_test: add_test,
};
