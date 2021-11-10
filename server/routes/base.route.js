const express = require("express");
const Joi = require("joi");
const router = express.Router();

// data models
const Project = require("./../models/project");

// fetch all project info
router.get("/projects", function (req, res) {
  Project.find(function (err, projects) {
    if (err) res.send(err);
    console.log(projects);
    res.status(200).send(projects); // return all projects in JSON format
  });
});

// fetch specific project info

// add checkpoints
const createCheckpoints = (startDate) => {
  const numWeeks = 2;
  const titles = ["filming", "rough draft 1", "rough draft 2", "cover photo", "final draft"];
  let checkpoints = [];
  titles.forEach((curTitle, i) => {
    const date = new Date(startDate);
    const temp = { title: curTitle, date: new Date(date.setDate(startDate.getDate() + numWeeks * 7 * i))};
    checkpoints.push(temp);
  });
  return checkpoints;
};

// Create a new project
router.post("/project", async (req, res) => {
  // Schema for project info validation
  const schema = Joi.object({
    title: Joi.string().required(),
    startDate: Joi.date().required(),
  });
  try {
    let data = await schema.validateAsync(req.body);
    // add checkpoints
    const checkpoints = createCheckpoints(data.startDate);
    data = { ...data, checkpoints: checkpoints };
    try {
      const project = new Project(data);
      await project.save();
      console.log(project);
      res.status(201).send({title: project.title});
    } catch (err) {
      console.log(err.message);
      res.status(400).send({ error: "error" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err.details[0].message });
  }
});

module.exports = router;