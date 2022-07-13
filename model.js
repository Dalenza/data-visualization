// getstudentsMarks() => array of student marks
// getStudentMark(userName : string) => object with keys = subjects and values = marks 
// getStudentMark(userName: string, subject:string), => object with key = subject and value = mark
// getStudentMoy(userName:string, semester: string) => number
// NB: if semester is not specified return the general moy for all year
// getStudentCredits(userName:string , semester: string)
// NB: if semester is not specified return the general moy for all year

const fs = require("fs")
const { builtinModules } = require("module")

/**
 * returns an object representation of a json file
 * @param {String} path - path to json file 
 * @returns {Object} an object representation of the json file
 */
function jsonRead(path) {
    const data = fs.readFileSync(path, { encoding: "utf-8" }, (err, jsonString) => {
        if (err) {
            console.log("error")
            return
        }
    })
    return JSON.parse(data)
}
/**
 * 
 * @returns an array of student marks(objects)
 */
function getStudentsMarks() {
    return jsonRead("./database/L2CS01.json")
}

/**
 * gets the specified student's mark for a specified subject  or all marks
 * @param {string} studentName 
 * @param {string} subject 
 * @returns either an object containing all marks or an object containing the mark of the specified subject
 */
function getStudentMark(studentName, subject = undefined) {
    const studentMarks = jsonRead("./database/L2CS01.json")
    studentName = studentName.toLowerCase();

    for (student of studentMarks) {
        if (studentName === student.Name.toLowerCase()) {
            if (subject) {
                return { [subject]: student[subject] }
            } else {
                const obj = { ...student }
                delete obj.Name
                return obj
            }
        }
    }
}


/**
 * gets the student's score for the given semester , or for the whole year.
 * @param {string} studentName 
 * @param {string} semester 
 * @returns {Number} returns a number representing the student's score
 */
function getStudentMoy(studentName, semester = undefined) {
    const studentScores = jsonRead("./database/moy L2CS01.json")
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
    const students = jsonRead("./database/moy L2CS01.json")
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
    const students = jsonRead("./database/moy L2CS01.json")
    return students;
}

module.exports = {
    getStudentMark,
    getStudentsMarks,
    getStudentMoy,
    getStudentsMoy,
    getStudentsGeneralMoy
}
