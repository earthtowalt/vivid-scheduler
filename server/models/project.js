const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema({
  pname: { type: String, required: true, index: { unique: true } },
  powner : {type : String, default: ''},
  ptype : {type : String, default: ''},
  pstartDate: { type: Date, default: new Date() },
  pcheckPoints: [{title: String, date: Date}],
  description : {type : String, default: ''},
});

module.exports = mongoose.model("Project", Project);
