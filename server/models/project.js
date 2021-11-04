const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema({
  title: { type: String, required: true, index: { unique: true } },
  startDate: { type: Date, default: new Date() },
  checkpoints: [{title: String, date: Date}],
});

module.exports = mongoose.model("Project", Project);