const model = require("./model");
/**
 *
 * @param {number} group - specifies which group grades data to retrieve , if not specified all group grades data are returned.
 * @returns {Array<Object>}the grades data for each student in each group or in all groups.
 */
function getStudentsMarks(group = undefined) {
  if (!group) {
    let studentsMarks = [];
    for (let i = 1; i < 5; i++) {
      studentsMarks.push(...model.jsonRead(`./database/L2CS0${i}.json`));
    }
    return studentsMarks;
  } else {
    return model.jsonRead(`./database/${group}.json`);
  }
}

/**
 * gets the specified student's mark for a specified subject  or all marks
 * @param {string} studentName
 * @param {string} subject
 * @param {string} group
 * @returns either an object containing all marks or an object containing the mark of the specified subject
 */
function getStudentMark(studentName, subject = undefined, group) {
  const studentMarks = model.jsonRead(`./database/${group}.json`);
  studentName = studentName.toLowerCase();

  for (student of studentMarks) {
    if (studentName === student.Name.toLowerCase()) {
      if (subject) {
        return { [subject]: student[subject] };
      } else {
        const obj = { ...student };
        delete obj.Name;
        return obj;
      }
    }
  }
}

module.exports = {
  getStudentMark,
  getStudentsMarks,
};
