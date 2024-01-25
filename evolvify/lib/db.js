// const mongoose = require('mongoose')

// module.exports = mongoose.connect('mongodb+srv://admin-nishita:BtcGtTYXAUXn.i4@atlascluster.0culu.mongodb.net/todo2listDB',{
//     useUnifiedTopology : true,
//     useNewUrlParser : true,
//     useFindAndModify : false
// }, err => {
//     if(err) console.log(`Error in DB Connection ${err}`)
//     console.log(`MongoDB Connection Suceeded...`)
// })

import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://admin-nishita:BtcGtTYXAUXn.i4@atlascluster.0culu.mongodb.net/todo2list";

const connection = {};

async function connect(){
    if(connection.isConnected){
        console.log("connected Successfully")
        return;
    }else{
        console.log("Not Connected")
    }

    const db = await mongoose.connect(MONGO_URI);

    connection.isConnected = db.connections[0].readyState;
}

export default connect;