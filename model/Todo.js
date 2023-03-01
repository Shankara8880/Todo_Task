const mongoose = require("mongoose")

module.exports = mongoose.model("todo", mongoose.Schema({
    title: String,
    desc: String,
    createdAt: String,
    dueAt: String,
    tag: String,
    status: String,
}))