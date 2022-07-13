const express = require('express')
const { some } = require('lodash')
const router = require("./routes/home")


const app = express()

// initialize routes
app.use(router)
// listen for requests 
app.listen(3000,()=>{
    console.log('listening on port 3000')
})

