const model = require("../models");

function add_test(data) {
  return new Promise(async function (resolve, reject) {
    try {
      console.log("=====request recieved by add_test function =====", data, "=====saving data in db======");
      let doc = model.test_model({
        test_name: data.test_name,
      });
      doc.save(function (err, doc) {
        if (err) return reject(err, console.log("==database error==="));
        resolve(doc);
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  add_test: add_test,
};
