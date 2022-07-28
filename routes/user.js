const express = require("express");
const router = express.Router();
// const bl = require("../businessLogic");
const student = require("../model/student");
router.use(express.json());

router.get("/StudentGrade/:userName", (req, res) => {
  const userName = req.params.userName;
  res.send(student.getStudentGrade(userName));
});

router.get("/StudentGrade/:userName/:subject", (req, res) => {
  const userName = req.params.userName;
  const subject = req.params.subject;
  res.send(student.getStudentGrade(userName, subject));
});

router.get("/StudentScore/:userName", (req, res) => {
  const userName = req.params.userName;
  res.send(student.getStudentScore(userName));
});

router.get("/StudentScore/:userName/:semester", (req, res) => {
  const userName = req.params.userName;
  const semester = req.params.semester;
  res.send(student.getStudentScore(userName, semester));
});

// function getStudentRankClass(studentName, group, semester = undefined) {
router.get("/StudentRankClass/:userName/:group", (req, res) => {
  const userName = req.params.userName;
  const group = req.params.group;
  res.send(student.getStudentRankClass(userName, group));
});

router.get("/StudentRankClass/:userName/:group/:semester", (req, res) => {
  const userName = req.params.userName;
  const group = req.params.group;
  const semester = req.params.semester;
  res.send(student.getStudentRankClass(userName, group, semester));
});

router.get("/StudentRankSection/:userName", (req, res) => {
  const userName = req.params.userName;
  res.send(student.getStudentRankSection(userName));
});

router.get("/StudentRankSection/:userName/:semester", (req, res) => {
  const userName = req.params.userName;
  const semester = req.params.semester;
  res.send(student.getStudentRankSection(userName, semester));
});

router.get("/StudentRankGradesClass/:userName/:group", (req, res) => {
  const userName = req.params.userName;
  const group = req.params.group;
  res.send(student.getStudentRankGradesClass(userName, group));
});

router.get("/StudentRankGradesSection/:userName", (req, res) => {
  const userName = req.params.userName;
  res.send(student.getStudentRankGradesSection(userName));
});
module.exports = router;
