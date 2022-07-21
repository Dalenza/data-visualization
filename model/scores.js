const model = require("./model")
/**
 * gets the student's score for the given semester , or for the whole year.
 * @param {string} studentName 
 * @param {string} semester 
 * @param {string} group e.g (L2CS01)
 * @returns {Number} returns a number representing the student's score
 */
 function getStudentMoy(studentName, semester = undefined, group) {
    const studentScores = model.jsonRead(`./database/moy ${group.toUpperCase()}.json`)
    studentName = studentName.toLowerCase()
    for (student of studentScores) {
        if (studentName === student.Name.toLowerCase()) {
            return semester ? student[`moy ${semester}`] : student["moy generale"]
        }
    }
}

/** 
 * @returns {Array<Number>} students general scores 
*/
function getStudentsGeneralMoy(){
    const students = model.jsonRead("./database/moy L2CS01.json")
    const generalScores = []
    for(student of students){
        generalScores.push(student["moy generale"])
    }

    return generalScores
}

/**
 * 
 * @returns {Array<Object>} - array of objects representing the different scores of each students during the whole year.
 */
 function getStudentsMoy(){
    const students = model.jsonRead("./database/moy L2CS01.json")
    return students;
}

module.exports = {
    getStudentMoy,
    getStudentsMoy,
    getStudentsGeneralMoy
}