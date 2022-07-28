const express = require("express");
// const scores = require("../model/scores");
// const marks = require("../model/marks");
// const bl = require("../businessLogic");
const student = require("../model/student");
const router = express.Router();
router.use(express.json());

router.get("/leaderboard", (req, res) => {
  res.send(student.getLeaderBoard());
});

router.get("/scores", (req, res) => {
  res.send(student.getStudentsScores());
});

router.get("/groupedScores", (req, res) => {
  res.send(student.getGroupedScores());
});

router.get("/StudentsGrades", (req, res) => {
  res.send(student.getStudentsGrades());
});

router.get("/StudentsGrades/:group", (req, res) => {
  const group = req.params.group;
  res.send(student.getStudentsGrades(group));
});

module.exports = router;
