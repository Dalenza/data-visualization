const express = require("express");
const router = express.Router();
// const bl = require("../businessLogic");
const student = require("../model/student");
router.use(express.json());
// function getStudentRankClass(studentName, group, semester = undefined) {
router.get("/StudentRankClass", (req, res) => {
  const { group } = req.body;
  const { name } = req.body;
  const { semester } = req.body;
  if (!group || !name) {
    res.status(418).send({ message: "we need a group or a name" });
  }
  const data = student.getStudentRankClass(name, group, semester);
  res.status(200).send(data);
});

router.get("/StudentRankSection", (req, res) => {
  const { name } = req.body;
  const { semester } = req.body;
  if (!name) {
    res.status(418).send({ message: "we need a name" });
  }
  const data = student.getStudentRankSection(name, semester);
  res.status(200).send(data);
});
router.get("/StudentRankGradesClass", (req, res) => {
  const { name } = req.body;
  const { group } = req.body;
  if (!name || !group) {
    res.status(418).send({ message: "we need a name or a group" });
  }
  const data = student.getStudentRankGradesClass(name, group);
  res.status(200).send(data);
});

router.get("/StudentRankGradesSection", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(418).send({ message: "we need a name " });
  }
  const data = student.getStudentRankGradesSection(name);
  res.status(200).send(data);
});
module.exports = router;
