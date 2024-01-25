// const mongoose = require('mongoose')

// const TaskSchema = new mongoose.Schema({
//     todo : String,
//     isComplete : Boolean,

//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: "User",
//       }
// })

// const Task = mongoose.model('task',TaskSchema)

// module.exports = Task

import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
    todo : {
      type:String,
    isComplete : Boolean
    },
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      }
});

module.exports = mongoose.models.task || mongoose.model("task", TaskSchema);
