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
  const { group } = req.body;
  if (!group) {
    res.status(418).send({ message: "we need a group" });
  }
  const data = student.getStudentsGrades(group);
  res.status(200).send(data);
});

router.get("/StudentGrade", (req, res) => {
  const { name } = req.body;
  const { subject } = req.body;
  if (!name) {
    res.status(418).send({ message: "we need a name" });
  }
  const data = student.getStudentGrade(name, subject);
  res.status(200).send(data);
});

router.get("/StudentScore", (req, res) => {
  const { name } = req.body;
  const { semester } = req.body;
  if (!name) {
    res.status(418).send({ message: "we need a name" });
  }
  const data = student.getStudentScore(name, semester);
  res.status(200).send(data);
});

module.exports = router;
