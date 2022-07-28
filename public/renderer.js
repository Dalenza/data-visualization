function renderLeaderBoard(data) {
  const tbody = document.querySelector(".table-body");
  for (i = 0; i < 10; i++) {
    const tableRow = document.createElement("tr");
    const rank = document.createElement("td");
    const name = document.createElement("td");
    const group = document.createElement("td");
    name.innerText = data[i].name;
    name.classList.add("user-name");
    rank.innerText = data[i].rank;
    group.innerText = data[i].group;
    group.classList.add("user-group");
    tableRow.append(rank, name, group);
    tbody.append(tableRow);
  }
}

function renderPieChart(groups) {
  const labels = ["0-10", "10-12", "12-14", "14-16", "16-20"];
  const values = [];
  for (label of labels) {
    values.push(groups[label]);
  }
  let nbStudents = 0;
  for (value of values) {
    nbStudents += value;
  }
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Scores Percentage",
        backgroundColor: [
          "rgba(185, 49, 97, 0.801)",
          "rgba(215, 82, 128, 0.806)",
          "rgba(238, 209, 128, 0.804)",
          "rgba(255, 248, 156, 0.801)",
          "rgba(238, 209, 128, 0.899)",
        ],
        borderColor: "transparent",
        data: values.map((ele) => {
          return ((ele * 100) / nbStudents).toFixed(2);
        }),
      },
      {
        label: "Scores Distribution",
        backgroundColor: [
          "#B93160",
          "#D75281",
          "#EED180",
          "#FFF89C",
          "#EED180",
        ],
        borderColor: "transparent",
        data: values,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: ["Scores distribution", "percentage/number"],
          fontFamily: "sans-serif",
          fontSize: 24,
          fontColor: "rgb(0,120,0)",
        },
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const myChart = new Chart("pie-chart__canvas", config);
}

function showPieChart(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderPieChart(data);
    });
}

function showLeaderBoard(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => renderLeaderBoard(data));
}

function renderUserData(data) {
  console.log(data);
}

function showUserData(url, data) {
  const options = {
    body: JSON.stringify(data),
  };
  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => renderUserData(data));
}

showLeaderBoard("/home/leaderboard");
showPieChart("home/groupedScores");
