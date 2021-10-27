const mongoose = require('mongoose');

 module.exports = mongoose.model('Project', {
    title : {type : String, default: ''},
    startDate : {type : Date, default: new Date()}
    });
   