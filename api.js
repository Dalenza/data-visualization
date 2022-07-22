const express = require("express");
const PORT = 3000;
const app = express();
const homeRoute = require("./routes/home");
const userRoute = require("./routes/user");


app.use('/home', homeRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log("good");
})