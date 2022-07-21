const express = require('express')
const homeRouter = require("./routers/home")
// const userRouter = require("./routes/user")

const app = express()

// initialize routes
app.use(homeRouter)
// app.use("/users",userRouter)
// listen for requests 
app.listen(3000,()=>{
    console.log('listening on port 3000')
})

