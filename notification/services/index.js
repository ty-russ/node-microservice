const test_srv = require("./test_srv");

// module.exports = {
//   test_srv: test_srv,
// };

module.exports = () => {
  return Object.assign({}, test_srv);
};
