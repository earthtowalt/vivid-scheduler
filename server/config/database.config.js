
let MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
let Project = require('../models/project');
let env = require('cross-env');

let mongoServer = -1;

module.exports = {
  getUrl: async() => {
  if (env.NODE_ENV === 'prod') {
    return 'mongodb://localhost:27017/vivid-scheduler';
  }

  if (mongoServer != -1) {
    return mongoServer.getUri();
  }

  mongoServer = await MongoMemoryServer.create();

  // populate test data
  Project.insertMany([
    {pname: 'Project A', powner: 'Jack'}, 
    {pname: 'Project B', powner: 'Alice'}, 
    {pname: 'Project C', powner: 'Reena'}, 
    {pname: 'Project D', powner: 'Sophia'}
  ]);

  return mongoServer.getUri();

}};