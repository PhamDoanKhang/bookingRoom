
const express = require("express")
const app = express()

require("dotenv").config()
const path = require("path")
const morgan = require("morgan")

const port = process.env.PORT || 5000

const {rootRouter} = require("./router/root.router")

app.use(morgan("combined"))

app.use(express.static(path.join(__dirname,"src/public")));

// Root router 
app.use("/api/",rootRouter)


app.listen(port,()=>{console.log(`Đang chạy ${port}`);})