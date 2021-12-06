const express = require("express");
const Joi = require("joi");
const { findOneAndUpdate } = require("./../models/project");
const router = express.Router();

// data models
const Project = require("./../models/project");

// fetch all project info
router.get("/projects", function (req, res) {
  Project.find(function (err, projects) {
    if (err) res.send(err);
    // console.log(projects);
    res.status(200).send(projects); // return all projects in JSON format
  });
});

// fetch specific project info

// add checkpoints
const createCheckpoints = (startDate) => {
  const numWeeks = 2;
  const titles = [
    "filming",
    "rough draft 1",
    "rough draft 2",
    "cover photo",
    "final draft",
  ];
  let checkpoints = [];
  titles.forEach((curTitle, i) => {
    const date = new Date(startDate);
    const temp = {
      cname: curTitle,
      cdate: new Date(date.setDate(startDate.getDate() + numWeeks * 7 * i)),
    };
    checkpoints.push(temp);
  });
  return checkpoints;
};

// Create a new project
router.post("/project", async (req, res) => {
  console.log("beggining of post");
  // Schema for project info validation
  const schema = Joi.object({
    pname: Joi.string().required(),
    powner: Joi.string(),
    ptype: Joi.string(),
    pstartDate: Joi.date().required(),
    pcheckpoints: Joi.array(),
    pdescription: Joi.string(),
    pcompleted: Joi.string(),
    purl: Joi.string(),
  });
  try {
    debugger;
    let data = await schema.validateAsync(req.body);
    // add checkpoints
    const checkpoints = createCheckpoints(data.pstartDate);
    data = { ...data, pcheckpoints: checkpoints };
    try {
      const project = new Project(data);
      await project.save();
      console.log(project);
      res.status(201).send({ pname: project.pname });
    } catch (err) {
      console.log(err.message);
      res.status(400).send({ error: err.message });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err.details[0].message });
  }
});

// Mark a project as completed
router.put('/project', function(req, res) {
  let data = req.body;
  console.log('Project ' + data.pname + " is complete");
  console.log(data);
  curProject = Project.findOneAndUpdate({pname: data.pname}, {$set:{purl:data.purl, pcompleted:'Yes'}}, function(err, doc){
    if(err){
      console.log("Something went wrong");
    } else {
      console.log('success!');
    }
  });
  console.log(curProject.pname + curProject.pcompleted)
});

// Update a Project
router.put('/update-project', function(req, res) {
  
  const data = req.body;
  console.log('PUT update-project: ' + data.pname);

  curProject = Project.findOneAndUpdate({pname: data.pname}, {$set:{
      powner:data.powner, 
      ptype:data.ptype,
      pstartDate:data.pstartDate,
      pdescription:data.pdescription,
    }}, function(err, doc){
    if(err){
      console.log("Something went wrong - " + err);
    }
  });

});

// Create a new admin
router.post("/login", async (req, res) => {
  // Schema for admin info validation
  const schema = Joi.object({
    password: Joi.string().required(),
  });
  try {
    let data = await schema.validateAsync(req.body);
    console.log(data);
    if (data.password === "p") {
      return res.status(201).send({ user: "admin" });
    }
    return res.status(400).send({ error: "Password is incorrect" });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err.details[0].message });
  }
});

module.exports = router;
