const scores = require("./model/scores")
const marks = require("./model/marks")
const model = require("./model/model")


function getLeaderBoard(){
    const studentScores = scores.getStudentsMoy()
    const scoresList = []
    for(score of studentScores){
        scoresList.push({name:score.Name,score:score["moy generale"]})
    }
    scoresList.sort(function(a,b){
        return b.score - a.score 
    })
    let rank = 1
    for(score of scoresList){
        score.rank = rank
        rank++
    }
    return scoresList
}

/**
 * gets the student's rank in his class
 * @param {string} studentName
 * @param {string} group e.g (L2CS01)
 * @param {string} semester e.g (sem1|sem2)
 * @returns {Number} returns a number representing the student's rank in his class in the first semester or second semester or in general
 */
 function getStudentRankClass(studentName, group, semester = undefined) {
    const studentScores = model.jsonRead(`./database/moy ${group.toUpperCase()}.json`)
    let moy = [];
    if (!semester) semester = "generale";
    for (student of studentScores) {
        moy.push([student[`moy ${semester}`], student.Name.toLowerCase()])
    }
    moy.sort((a, b) => {
        return (a[0] >= b[0]) ? -1 : 1;
    });
    for (let i = 0; i < moy.length; i++) {
        if (moy[i][1] === studentName.toLowerCase()) {
            return i + 1;
        }
    }
}
/**
 * gets the student's rank in his "section"
 * @param {string} studentName
 * @param {string} semester e.g (sem1|sem2)
 * @returns {Number} returns a number representing the student's rank in his "section" in the first semester or second semester or in general
 */
function getStudentRankSection(studentName, semester = undefined) {
    if (!semester) semester = "generale";
    let moy = [];
    for (let i = 1; i <= 4; i++) {
        const studentScores = model.jsonRead(`./database/moy L2CS0${i}.json`)
        for (student of studentScores) {
            moy.push([student[`moy ${semester}`], student.Name.toLowerCase()])
        }
    }
    moy.sort((a, b) => {
        return (a[0] >= b[0]) ? -1 : 1;
    });
    for (let i = 0; i < moy.length; i++) {
        if (moy[i][1] === studentName.toLowerCase()) {
            return i + 1;
        }
    }
}
/**
 * gets the student's rank in all subects;
 * @param {string} studentName
 * @returns {Number} returns the rank of each subject (object)
 */
function getStudentRankSubjectsClass(studentName) {
    const grades = getStudentsMarks();
    let ans = {};
    Object.keys(grades[0]).forEach(ele => {
        ans[ele] = -1;
    });

    ans.Name = studentName;
    let arr = Object.keys(ans).splice(1);
    arr.forEach(ele => {
        let moy = [];
        for (grade of grades) {
            moy.push([grade[ele] === 'disp' ? 0 : grade[ele], grade.Name]);
        }
        moy.sort((a, b) => {
            return (a[0] >= b[0]) ? -1 : 1;
        });
        for (let i = 0; i < moy.length; i++) {
            if (moy[i][1].toLowerCase() === studentName.toLowerCase()) {
                ans[ele] = i + 1;
                break;
            }
        }
    });
    return ans;

}

//console.log(getStudentRankSubjectsClass("HAJJI MOHAMED AMINE"));
//console.log(getStudentRankSubjectClass("HAJJI MOHAMED AMINE", "Ingénierie des bases de données"));
//console.log(getStudentRankOverSection("HAJJI MOHAMED AMINE", "sem2"));
//console.log(getStudentMoy("ZARROUKI MARIEM", "L2CS03", "sem2"));

module.exports = {
    getLeaderBoard,
    getStudentRankClass,
    getStudentRankSection,
    getStudentRankSubjectsClass
}
