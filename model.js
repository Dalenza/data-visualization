// getstudentsMarks() => array of student marks
// getStudentMark(userName : string) => object with keys = subjects and values = marks 
// getStudentMark(userName: string, subject:string), => object with key = subject and value = mark
// getStudentMoy(userName:string, semester: string) => number
// NB: if semester is not specified return the general moy for all year
// getStudentCredits(userName:string , semester: string)
// NB: if semester is not specified return the general moy for all year

const fs = require("fs")

function jsonRead(path) {
    const data = fs.readFileSync(path, { encoding: "utf-8" }, (err, jsonString) => {
        if (err) {
            console.log("error")
            return
        }
    })
    return JSON.parse(data)
}

function getStudentMarks() {
    return jsonRead("./database/L2CS01 sem1.json")
}

//getUserMark needs modification

function getStudentMark(studentName, subject = "") {
    // create the data array from the coressponding json file
    // search the entry for userName in the array of users
    // return that entry
    // if a subject is specified return entry for that subject alone
    const studentMarks = jsonRead("./database/L2CS01 sem1.json")

    studentName = studentName.toLowerCase();
    if (subject) {
        for (student of studentMarks) {
            if (student.Name.toLowerCase() === studentName) {
                return student[subject] ? { [subject]: student[subject] } : undefined
            }
        }
    } else {
        for (student of studentMarks) {
            if (student.Name.toLowerCase() === studentName) {
                let obj = { ...student }
                delete obj.Name
                return obj;
            }
        }
        return undefined
    }
}

console.log(getStudentMark("daly iheb"))

