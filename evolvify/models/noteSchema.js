import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
{
    content: {
        type: String,
        required: true,
        maxLength: 500,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

});

module.exports = mongoose.models.Note || mongoose.model("note", noteSchema);
