const express = require("express");
const path = require("path");

//importing routers
const homeRouter = require("./routes/home");
const userRouter = require("./routes/user");

const app = express();
const publicPath = path.resolve(__dirname, "public");

// mounting routes to middleware
app.use("/home", homeRouter);
app.use("/user", userRouter);

// listen for requests
app.use(express.static(publicPath));
app.listen(3000, () => {
  console.log("listening on port 3000");
});
