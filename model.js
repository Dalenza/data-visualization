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
 * @param {string} group e.g (L2CS01)
 * @returns {Number} returns a number representing the student's score
 */
function getStudentMoy(studentName, semester = undefined, group) {
    const studentScores = jsonRead(`./database/moy ${group.toUpperCase()}.json`)
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

/**
 * gets the student's rank in his class
 * @param {string} studentName
 * @param {string} group e.g (L2CS01)
 * @param {string} semester e.g (sem1|sem2)
 * @returns {Number} returns a number representing the student's rank in his class in the first semester or second semester or in general
 */
function getStudentRankClass(studentName, group, semester = undefined) {
    const studentScores = jsonRead(`./database/moy ${group.toUpperCase()}.json`)
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
        const studentScores = jsonRead(`./database/moy L2CS0${i}.json`)
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
    getStudentMark,
    getStudentsMarks,
    getStudentMoy,
    getStudentsMoy,
    getStudentsGeneralMoy,
    getStudentRankClass,
    getStudentRankSection,
    getStudentRankSubjectsClass
}