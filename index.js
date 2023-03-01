const express = require("express")
require("dotenv").config({ path: "./config/.env" })
const cors = require("cors")
const mongoose = require("mongoose")
mongoose.set("strictQuery", true)
mongoose.connect(process.env.MONGO_URL)
const app = express()

app.use(express.json())
app.use(express.static("public"))
app.use(cors())
app.use("/todos", require("./routes/todoRoutes"))
app.use("*", (req, res) => {
    res.json({
        message: "404 : Resource Not Found"
    })
})



mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, (err) => {
        if (err) {
            console.log("UNABLE TO START SERVER ", err)
        } else {
            console.log(`SERVER RUNNING http://localhost:${process.env.PORT}`)
        }
    })
})
mongoose.connection.on("error", (err) => {
    console.log(`Mongo Connection Error ${err}`)
})


