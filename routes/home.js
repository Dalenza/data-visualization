const express = require("express");
const scores = require("../model/scores");
const marks = require("../model/marks");
const bl = require("../businessLogic");

const router = express.Router();
router.use(express.json());

router.get("/leaderboard", (req, res) => {
  res.send(bl.getLeaderBoard());
});

router.get("/scores", (req, res) => {
  res.send(scores.getStudentsMoy());
});

router.get("/StudentsMarks", (req, res) => {
  const { group } = req.body;
  if (!group) {
    res.status(418).send({ message: "we need a group" });
  }
  const data = marks.getStudentsMarks(group);
  res.status(200).send(data);
});

router.get("/StudentMark", (req, res) => {
  const { name } = req.body;
  const { group } = req.body;
  const { subject } = req.body;
  if (!name || !group) {
    res.status(418).send({ message: "we need a group or name" });
  }
  const data = marks.getStudentMark(name, subject, group);
  res.status(200).send(data);
});

router.get("/StudentMoy", (req, res) => {
  const { name } = req.body;
  const { group } = req.body;
  const { semester } = req.body;
  if (!name || !group) {
    res.status(418).send({ message: "we need a group or name" });
  }
  const data = { moy: scores.getStudentMoy(name, semester, group) };
  res.status(200).send(data);
});

module.exports = router;
