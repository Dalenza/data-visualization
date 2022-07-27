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

function getGroupedScores() {
  const studentScores = getStudentsScores();
  const generalScores = [];
  for (student of studentScores) {
    generalScores.push(student["moy generale"]);
  }
  // console.log(generalScores);
  const scoreGroups = {};
  for (generalScore of generalScores) {
    if (generalScore < 10) {
      scoreGroups["0-10"] = scoreGroups["0-10"] ? scoreGroups["0-10"] + 1 : 1;
    } else if (generalScore >= 10 && generalScore < 12) {
      scoreGroups["10-12"] = scoreGroups["10-12"]
        ? scoreGroups["10-12"] + 1
        : 1;
    } else if (generalScore >= 12 && generalScore < 14) {
      scoreGroups["12-14"] = scoreGroups["12-14"]
        ? scoreGroups["12-14"] + 1
        : 1;
    } else if (generalScore >= 14 && generalScore < 16) {
      scoreGroups["14-16"] = scoreGroups["14-16"]
        ? scoreGroups["14-16"] + 1
        : 1;
    } else {
      scoreGroups["16-20"] = scoreGroups["16-20"]
        ? scoreGroups["16-20"] + 1
        : 1;
    }
    if (generalScore < 10) {
      scoreGroups["0-10"] = scoreGroups["0-10"] ? scoreGroups["0-10"] + 1 : 1;
    }
  }
  return scoreGroups;
}

/**
 * gets the student's rank in his class
 * @param {string} studentName
 * @param {string} group e.g (L2CS01)
 * @param {string} semester e.g (sem1|sem2)
 * @returns {Number} returns a number representing the student's rank in his class in the first semester or second semester or in general
 */

function getStudentRankClass(studentName, group, semester = undefined) {
  const studentScores = getStudentsScores(group);
  if (!semester) semester = "generale";
  studentScores.sort((a, b) => {
    return b[`moy ${semester}`] - a[`moy ${semester}`];
  });
  for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i]["name"] === studentName.toUpperCase()) {
      return {
        rank: i + 1,
      };
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
  const studentScores = getStudentsScores();
  if (!semester) semester = "generale";
  studentScores.sort((a, b) => {
    return b[`moy ${semester}`] - a[`moy ${semester}`];
  });
  for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i]["name"] === studentName.toUpperCase()) {
      return {
        rank: i + 1,
      };
    }
  }
}

/**
 * gets the student's rank in all subects;
 * @param {string} studentName
 * @param {string} group
 * @returns {Number} returns the rank of each subject (object)
 */
function getStudentRankGradesClass(studentName, group) {
  const grades = getStudentsGrades(group);
  let ans = {};
  Object.keys(grades[0]).forEach((ele) => {
    ans[ele] = -1;
  });
  ans.name = studentName;
  let arr = Object.keys(ans).splice(1);
  arr.forEach((ele) => {
    let moy = [];
    for (grade of grades) {
      moy.push([grade[ele] === "disp" ? 0 : grade[ele], grade.name]);
    }
    moy.sort((a, b) => {
      return a[0] >= b[0] ? -1 : 1;
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

/**
 * gets the student's rank in all subjects;
 * @param {string} studentName
 * @returns {Number} returns the rank of each subject (object)
 */
function getStudentRankGradesSection(studentName) {
  const grades = getStudentsGrades();
  let ans = {};
  Object.keys(grades[0]).forEach((ele) => {
    ans[ele] = -1;
  });
  ans.name = studentName;
  let arr = Object.keys(ans).splice(1);
  arr.forEach((ele) => {
    let moy = [];
    for (grade of grades) {
      moy.push([grade[ele] === "disp" ? 0 : grade[ele], grade.name]);
    }
    moy.sort((a, b) => {
      return a[0] >= b[0] ? -1 : 1;
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

function getLeaderBoard() {
  const scoresList = getStudentsData();
  scoresList.sort((a, b) => {
    return b.scores["moy generale"] - a.scores["moy generale"];
  });
  let i = 1;
  for (score of scoresList) {
    score.rank = i;
    i++;
  }
  return scoresList;
}

// console.log(getLeaderBoard());

module.exports = {
  getStudentData,
  getStudentsData,
  getStudentsGrades,
  getStudentGrade,
  getStudentsScores,
  getGroupedScores,
  getStudentScore,
  getStudentRankClass,
  getStudentRankSection,
  getStudentRankGradesClass,
  getStudentRankGradesSection,
  getLeaderBoard,
};
