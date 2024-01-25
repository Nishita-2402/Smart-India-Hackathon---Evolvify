import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://admin-nishita:BtcGtTYXAUXn.i4@atlascluster.0culu.mongodb.net/NotesDB";

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