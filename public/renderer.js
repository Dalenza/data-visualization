function renderLeaderBoard(data) {
  const tbody = document.querySelector(".table-body");
  for (i = 0; i < 10; i++) {
    const tableRow = document.createElement("tr");
    const rank = document.createElement("td");
    const name = document.createElement("td");
    const group = document.createElement("td");
    name.innerText = data[i].name;
    rank.innerText = data[i].rank;
    group.innerText = data[i].group;
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

  const data = {
    labels: labels,
    datasets: [
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
    type: "pie",
    data: data,
    options: {
      maintainAspectRatio: false,
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

showLeaderBoard("/home/leaderboard");
showPieChart("home/groupedScores");
