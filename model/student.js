const model = require("./model");

function getStudentsData() {
  const students = [];
  for (let i = 1; i < 5; i++) {
    const L2CS = model.jsonRead(`./database/moy L2CS0${i}.json`);
    const L2CSMarks = model.jsonRead(`./database/L2CS0${i}.json`);

    for (let j = 0; j < L2CSMarks.length; j++) {
      L2CS[j] = {
        name: L2CS[j].Name,
        scores: L2CS[j],
        grades: L2CSMarks[j],
        group: `L2CS0${i}`,
      };
      delete L2CS[j].scores.Name;
      delete L2CS[j].grades.Name;
    }
    students.push(...L2CS);
  }
  return students;
}

function getStudentData(name) {
  const students = getStudentsData();
  for (student of students) {
    if (student.name.toLowerCase() == name.toLowerCase()) {
      return student;
    }
  }
}
/**
 *
 * @param {string} group
 * @returns {Array<Object>} - array of students grades
 */
function getStudentsGrades(group = undefined) {
  const students = getStudentsData();
  const studentsGrades = [];
  if (!group) {
    for (student of students) {
      studentsGrades.push({ name: student.name, ...student.grades });
    }
    return studentsGrades;
  }
  for (student of students) {
    if (student.group === group) {
      studentsGrades.push({ name: student.name, ...student.grades });
    }
  }
  return studentsGrades;
}

function getStudentGrade(name, subject = undefined) {
  const studentData = getStudentData(name.toUpperCase());
  if (!subject) {
    return studentData.grades;
  }
  return { [subject]: student.grades[subject] };
}

function getStudentsScores(group = undefined) {
  const students = getStudentsData();
  const studentsSCores = [];
  if (!group) {
    for (student of students) {
      studentsSCores.push({ name: student.name, ...student.scores });
    }
    return studentsSCores;
  }
  for (student of students) {
    student.group === group
      ? studentsSCores.push({ name: student.name, ...student.scores })
      : undefined;
  }
  return studentsSCores;
}

function getStudentScore(name, semester = undefined) {
  const studentData = getStudentData(name.toUpperCase());
  if (!semester) {
    return student.scores;
  }
  return { [semester]: student.scores[`moy ${semester}`] };
}

console.log(getStudentScore("daly iheb", "sem2"));

module.exports = {
  getStudentData,
  getStudentsData,
  getStudentsGrades,
  getStudentGrade,
  getStudentsScores,
  getStudentScore,
};
