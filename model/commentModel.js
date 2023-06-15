const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const commentSchema = new mongoose.Schema({

    comment: {
        type: String,
        required: false
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }


})

module.exports = mongoose.model("comment", commentSchema)