async function fetchLeaderBoard() {
  return fetch("/leaderboard")
    .then((res) => res.json())
    .then((data) => renderLeaderBoard(data));
}

function renderLeaderBoard() {
  const leaderBoard = document.querySelector("leader-board");
}

function renderPieChart() {}
