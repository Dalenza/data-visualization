function fetchLeaderBoard(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => renderLeaderBoard(data));
}

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

fetchLeaderBoard("/home/leaderboard");
