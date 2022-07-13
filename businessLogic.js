const model = require("./model")


function getLeaderBoard(){
    const studentScores = model.getStudentsMoy()
    const scores = []
    for(score of studentScores){
        scores.push({name:score.Name,score:score["moy generale"]})
    }
    scores.sort(function(a,b){
        return b.score - a.score 
    })
    let rank = 1
    for(score of scores){
        score.rank = rank
        rank++
    }
    return scores
}

module.exports = {
    getLeaderBoard,
}