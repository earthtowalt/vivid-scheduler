const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const mongoose = require("mongoose");
const dbConfig = require("./config/database.config");
const routes = require("./routes/base.route");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
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
// const Project = require("./models/project");

// app.get("/", (req, res) => res.send("Welcome!"));

// app.get("/api/projects", function (req, res) {
//   Project.find(function (err, projects) {
//     if (err) res.send(err);
//     console.log(projects);
//     res.json(projects); // return all projects in JSON format
//   });
// });


// app.post("/api/projects", function (req, res) {
//   let data = req.body;
//   let project = new Project();

//   project.title = data.pname
//   project.owner = data.powner
//   project.type = data.ptype
//   project.checkPoints = data.checkPoints
//   project.startDate = data.startDate
//   project.description = data.description
  

//   project.save(function (err) {
//     if (err) {
//       res.send(err);
//     }
//     res.sendStatus(200);
//   });
// });

server.listen(port, function () {
  console.info(`Server is up and running on port ${port}`);
});
