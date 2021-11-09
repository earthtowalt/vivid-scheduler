const mongoose = require('mongoose');

 module.exports = mongoose.model('Project', {
    title : {type : String, default: ''},
    owner : {type : String, default: ''},
    type : {type : String, default: ''},
    startDate : {type : Date, default: new Date()},
    checkPoints : {type : Array, default: []},
    description : {type : String, default: ''}
    });

   