//handles all test requests utilizing injected services

async function add_test(req, res) {
  try {
    console.log("===req==", req.body);
    console.log("=====srv=====", req.service);
    let test_resp = await req.service.add_test(req.body.data);
    res.status(200).send({
      message: "saved successfully!",
      test_id: `${test_resp.test_id}`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  add_test,
};
