const express = require("express");
const model = require("../model");
const router = express.Router();
router.use(express.json());


router.get('/StudentsMarks', (req, res) => {
    const { group } = req.body;
    if (!group) {
        res.status(418).send({ message: 'we need a group' });
    }
    const data = model.getStudentsMarks(group);
    res.status(200).send(data);
});

router.get('/StudentMark', (req, res) => {
    const { name } = req.body;
    const { group } = req.body;
    const { subject } = req.body;
    if (!name || !group) {
        res.status(418).send({ message: 'we need a group or name' });
    }
    const data = model.getStudentMark(name, subject, group);
    res.status(200).send(data);
});

router.get('/StudentMoy', (req, res) => {
    const { name } = req.body;
    const { group } = req.body;
    const { semester } = req.body;
    if (!name || !group) {
        res.status(418).send({ message: 'we need a group or name' });
    }
    const data = { moy: model.getStudentMoy(name, group, semester) };
    res.status(200).send(data);
});


module.exports = router;