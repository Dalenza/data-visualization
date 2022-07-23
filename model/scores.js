const model = require("./model");
/**
 * gets the student's score for the given semester , or for the whole year.
 * @param {string} studentName
 * @param {string} semester
 * @param {string} group e.g (L2CS01)
 * @returns {Number} returns a number representing the student's score
 */
function getStudentMoy(studentName, semester = undefined, group) {
  const studentScores = model.jsonRead(
    `./database/moy ${group.toUpperCase()}.json`
  );
  studentName = studentName.toLowerCase();
  for (student of studentScores) {
    if (studentName === student.Name.toLowerCase()) {
      return semester ? student[`moy ${semester}`] : student["moy generale"];
    }
  }
}

/**
 *
 * @param {number} group defines which class data should be retrieved , if not specified all classes data will be returned
 * @returns an array of scores for each student per section or per class.
 */
function getStudentsMoy(group = undefined) {
  if (!group) {
    let studentScores = [];
    for (let i = 1; i < 5; i++) {
      studentScores.push(...model.jsonRead(`./database/moy L2CS0${i}.json`));
    }
    return studentScores;
  } else {
    return model.jsonRead(`./database/moy ${group}.json`);
  }
}

module.exports = {
  getStudentMoy,
  getStudentsMoy,
};
