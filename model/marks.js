const model = require("./model")
/**
 * 
 * @returns an array of student marks(objects)
 */
 function getStudentsMarks() {
    return model.jsonRead("./database/L2CS01.json")
}


/**
 * gets the specified student's mark for a specified subject  or all marks
 * @param {string} studentName 
 * @param {string} subject 
 * @returns either an object containing all marks or an object containing the mark of the specified subject
 */
 function getStudentMark(studentName, subject = undefined) {
    const studentMarks = model.jsonRead("./database/L2CS01.json")
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

module.exports = {
    getStudentMark,
    getStudentsMarks
}