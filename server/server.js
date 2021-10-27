const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const mongoose = require("mongoose");
const dbConfig = require("./config/database.config");
const routes = require("./routes/base.route");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

const port = process.env.PORT || "8000";
app.set("port", port);

const server = http.createServer(app);

// data models
const Project = require("./models/project");

app.get("/", (req, res) => res.send("Welcome!"));

app.get("/api/projects", function (req, res) {
  Project.find(function (err, projects) {
    if (err) res.send(err);
    res.json(projects); // return all projects in JSON format
  });
});

app.post("/api/project", function (req, res) {
  let project = new Project();
  let data = req.body();
  console.log(data);

  project = { title: data.title, startDate: data.startDate };
  project.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.status(201).send({
      username: data.username,
      primary_email: data.primary_email,
    });
  });
});

server.listen(port, function () {
  console.info(`Server is up and running on port ${port}`);
});
