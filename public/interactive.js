document.addEventListener("click", (event) => {
  if (event.target && event.target.className === "user-name") {
    const name = event.target.innerText;
    const group = event.target.nextElementSibling.innerText;
    showUserData(`user/StudentRankClass/${name}/${group.toUpperCase()}`);
  }
});
