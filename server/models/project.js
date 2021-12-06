const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema({
  pname: { type: String, required: true, index: { unique: true } },
  powner : {type : String, default: ''},
  ptype : {type : String, default: ''},
  pstartDate: { type: Date, default: new Date() },
  pcheckpoints: [{ cname: String, cdate: Date }],
  pdescription : {type : String, default: ''},
  pcompleted : {type: String, default: ''},
  purl: {type: String, default: ''}
});

module.exports = mongoose.model("Project", Project);
