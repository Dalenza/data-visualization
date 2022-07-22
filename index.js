const express = require("express");
const homeRouter = require("./routers/home");
const path = require("path");
// const userRouter = require("./routes/user")

const app = express();
const publicPath = path.resolve(__dirname, "views");
// initialize routes
app.use(homeRouter);
// app.use("/users",userRouter)
// listen for requests

app.use(express.static(publicPath));
app.listen(3000, () => {
  console.log("listening on port 3000");
});
