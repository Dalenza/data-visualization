const express = require('express');
const scores = require("../model/scores")
const bl = require("../businessLogic")

const router = express.Router();

router.get("/scores",(req,res)=>{
    res.json(scores.getStudentsMoy())
})

router.get("/leaderboard",function(req,res){
    res.json(bl.getLeaderBoard())
})

module.exports = router;

