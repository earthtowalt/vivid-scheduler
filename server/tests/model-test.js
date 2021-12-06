let mongoose = require('mongoose');
let Project = require('../models/project');
let dbConfig = require('../config/database.config');


let expect = require('chai').expect;

describe('Data Models', () => {

  before(async () => {
    mongoose.connect(await dbConfig.getUrl());
  });

  after(() => {
    mongoose.disconnect;
  });

  beforeEach(() => {
    Project.insertMany([
      {pname: 'Project A', startDate: new Date(), powner: 'Jack'}, 
      {pname: 'Project B', startDate: new Date(), powner: 'Alice'}, 
      {pname: 'Project C', startDate: new Date(), powner: 'Reena'}, 
      {pname: 'Project D', startDate: new Date(), powner: 'Sophia'}
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
    expect(() => Project.create({pname: 'Project B', startDate: new Date(), powner: 'Alice'})).to.throw();
  });

  it('should not allow missing name field', () => {
    expect(() => Project.create({powner: 'No Name', startDate: new Date()})).to.throw();
  });

  it('should not allow missing startDate field', () => {
    expect(() => Project.create({pname: 'Project E', powner: 'No Date'})).to.throw();
  });
});