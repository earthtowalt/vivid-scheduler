let mongoose = require('mongoose');
let MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
let Project = require('../models/project');

let expect = require('chai').expect;

describe('Data Models', () => {

  let mongoServer;
  before(async () => {
    mongoServer = await MongoMemoryServer.create();
    mongoose.connect(mongoServer.getUri());
  });

  after(() => {
    mongoose.disconnect;
    mongoServer.stop();
  });

  beforeEach(() => {
    Project.insertMany([
      {pname: 'Project A', powner: 'Jack'}, 
      {pname: 'Project B', powner: 'Alice'}, 
      {pname: 'Project C', powner: 'Reena'}, 
      {pname: 'Project D', powner: 'Sophia'}
    ]);
  });

  afterEach(() => {
    Project.collection.drop();
  });

  it('should instantiate server properly', () => {
    expect(mongoose.connection).is.not.null;
  });

  it('should populate the test data', async () => {
    let projects = await Project.find({});
    expect(projects.length).to.equal(4);
  });

  it('should not allow duplicate Projects', () => {
    expect(() => Project.create({pname: 'Project B', powner: 'Alice'})).to.throw();
  });
});