"use strict";
const supertest = require("supertest");
const chai = require("chai");
const assert = chai.assert;

const server = require("../app");
const Database = require("../config/db");
const ctrl = require("../controllers");

//decribes the endpoint
describe("/addtest", () => {
  let request;
  //initiate DB
  let db = new Database("mongodb://localhost/tests");
  db.connect();

  let test_srv = {
    //add_test: () => Promise.resolve({ data: "foobar" }),

    add_test: (req) => {
      return new Promise(async function (resolve, reject) {
        try {
          let newTest = await ctrl.test_ctrl.add_test(req);
          return resolve(newTest);
        } catch (err) {
          reject(err);
        }
      });
    },

    // add_test: () => null,//to test catch block > returns 500
  };
  let srv = () => {
    return Object.assign({}, test_srv);
  };

  //set up server
  before(() => {
    const app = server(srv);
    request = supertest.agent(app);
  });

  //test
  it("should return success", (done) => {
    //return request
    request
      .post("/api/addtest")
      .send({
        data: {
          test_name: "test name",
        },
      })
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        console.log(res.body);
        assert.isString(res.body.test_id, "string");
      });
    done();
  });
});
