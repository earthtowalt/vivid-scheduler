"use strict";

// const should = require("should");
// const assert = require("assert");
// // const harness = require("./harness");
// const data = require("./data");
// // let config = {};
// let projects = data.projects;
// // const envConfig = require("simple-env-config");
// const env = process.env.NODE_ENV ? process.env.NODE_ENV : "test";

// let config = {
//   url: `http://localhost:8000/api/`,
// };

const request = require('supertest');
const app = require('../server');
const expect = require('chai').expect;
const mongoose = require('mongoose');
let dbConfig = require('../config/database.config');
const Project = require('../models/project');

describe('Project (POST) Endpoint', () => {

  before(() => {
    mongoose.connect(dbConfig.getUrl());
  });

  after(() => {
    mongoose.disconnect();
  })

  beforeEach(() => {
    // mongoose.Collection.drop();
  })
  
  it('should create a new post with proper params', async () => {

    const pname = 'New Name';
    const res = await request(app)
      .post('/api/project')
      .send({
        pname: pname,
        powner: 'New Owner',
        startDate: new Date()
      });
    expect(res.statusCode).to.equal(201);
    expect(res.body).to.contain({pname: pname});
  });

  it("should error on missing title", async() => {
    const res = await request(app)
      .post(`/api/project`)
      .send({
        powner: 'test owner',
        ptype: 'type',
        startDate: new Date(),
        description: 'description',
        completed: 'yes',
        url: '',
      });
      expect(res.statusCode).to.equal(400);
    });

  it("should error on missing start date", async () => {
    const res = await request(app)
      .post(`/api/project`)
      .send({
        pname: 'Test Name',
        powner: 'test_owner',
        ptype: 'type',
        description: 'description',
        completed: 'yes',
        url: '',
      });
      expect(res.statusCode).to.equal(400);
  });

  // it("second exapmle where post is correct???", (done) => {
  //   primaryAgent
  //     .post(`${config.url}project`)
  //     .send(projects.primary)
  //     .end((err, res) => {
  //       res.status.should.equal(201);
  //       res.body.pname.should.equal(projects.primary.pname);
  //       // Save the project info
  //       setTimeout(done, 100);
  //     });
  // });

  it("should error on repeated pname", async () => {
    const res = await request(app)
      .post(`/api/project`)
      .send({
        pname: 'Name A',
        startDate: new Date()
    });
    expect(res.statusCode).to.equal(201);
    const badRes = await request(app)
      .post(`/api/project`)
      .send({
        pname: 'Name A',
        startDate: new Date()
    });
    expect(badRes.statusCode).to.equal(400);
  });
});


describe("Projects (GET) Endpoint", () => {

  before(async () => {
    let url = await dbConfig.getUrl();
    // console.log(url);
    mongoose.connect(url);
  });

  after(() => {
    mongoose.disconnect();
  });

  it("should return empty list when DB is empty", async () => {
    const res = await request(app).get('/api/projects').expect(200);
    // console.log(res.body);
    expect(res.body).to.deep.equal([]);
  });

  it("should return correct response when entry exists in db", async() => {
    // @@TODO test all fields
    Project.create({pname: "Tester G", startDate: new Date()});
    Project.create({pname: "Tester H", startDate: new Date()});

    const res = await request(app).get('/api/projects');

    expect(res.status).to.equal(200);
    expect(res.body.length).to.equal(2);
    
    // primaryAgent.get("http://localhost:8000/api/projects").end((err, res) => {
    //   res.status.should.equal(200);
    //   res.body.pname.should.equal(users.primary.pname);
    //   res.body.powner.should.equal(users.primary.powner);
    //   res.body.ptype.should.equal(users.primary.ptype);
    //   res.body.checkpoints.should.be.instanceof(Array).and.have.lengthOf(5);
    //   res.body.description.should.equal(users.primary.description);
    //   res.body.completed.should.equal(users.primary.completed);
    //   res.body.url.should.equal(users.primary.url);
    // });
  });
});