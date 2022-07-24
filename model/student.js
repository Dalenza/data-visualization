const model = require("./model");

function getStudentsData() {
  const students = [];
  for (let i = 1; i < 5; i++) {
    const L2CS = model.jsonRead(`./database/moy L2CS0${i}.json`);
    const L2CSMarks = model.jsonRead(`./database/L2CS0${i}.json`);

    for (let j = 0; j < L2CSMarks.length; j++) {
      L2CS[j] = { ...L2CS[j], ...L2CSMarks[j], group: `L2CS0${i}` };
    }
    students.push(...L2CS);
  }
  return students;
}

function getStudentData(name) {
  const students = getStudentsData();
  for (student of students) {
    if (student.Name.toLowerCase() == name.toLowerCase()) {
      return student;
    }
  }
}

module.exports = {
  getStudentData,
  getStudentsData,
};
