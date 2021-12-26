// build your server here and require it from index.js
const express = require("express");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

//const PORT = process.env.PORT || 5000; --> in index.js

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: "Well, 500. This wasn't supposed to happen.",
        error: err.message
    });
});

server.use("*", (req, res) => {
  res.status(404).json({
    message: "Well, 404. This wasn't supposed to happen."
  });
});

module.exports = server; 
