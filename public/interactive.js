document.addEventListener("click", (event) => {
  if (event.target && event.target.className === "user-name") {
    const name = event.target.innerText;
    const data = {
      name: "daly iheb",
      semester: "sem1",
    };
    showUserData("user/StudentRankClass", data);
  }
});
