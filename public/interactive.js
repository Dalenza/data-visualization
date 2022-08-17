document.addEventListener("click", (event) => {
  if (event.target && event.target.className === "user-name") {
    const name = event.target.innerText;
    const group = event.target.nextElementSibling.innerText;
    // showUserData(`user/StudentRankClass/${name}/${group.toUpperCase()}`);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('group', group);
    window.location.href = "http://localhost:3000/user.html";
  }
});

async function get_group(name) {
  let res = await fetch("/home/leaderboard");
  let data = await res.json();
  for (let ele of data) {
    if (ele.name === name.toUpperCase()) {
      return ele.group;
    }
  }
}
document.getElementById("student-name").addEventListener("keypress", async (event) => {
  if (event.key == "Enter") {
    const name = event.target.value;
    const group = await get_group(name);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('group', group);
    window.location.href = "http://localhost:3000/user.html";
  }
})