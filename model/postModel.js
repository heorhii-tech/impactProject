const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },


})

module.exports = mongoose.model("post", postSchema)