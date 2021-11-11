"use strict";

const should = require("should");
const assert = require("assert");
const request = require("superagent");
const harness = require("./harness");
const data = require("./data");
let config = {};
let users = data.users;
const envConfig = require("simple-env-config");
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "test";

describe("Project:", () => {});

describe("Fetch:", () => {
    it("Success", done => {
      primaryAgent
        .get("http://localhost:8000/api/projects")
        .end((err, res) => {
          res.status.should.equal(200);
        //   res.body.should.equal([]);
          done();
        });
    });
});