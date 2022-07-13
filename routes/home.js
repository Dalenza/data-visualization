const express = require('express');
const model = require("../model")
const server = require("../businessLogic")

const router = express.Router();

router.get("/scores",(req,res)=>{
    res.send(JSON.stringify(model.getStudentsGeneralMoy()))
})

router.get("/leaderboard",function(req,res){
    res.send(JSON.stringify(server.getLeaderBoard()))
})

module.exports = router;

