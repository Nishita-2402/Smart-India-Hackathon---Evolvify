const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://admin-nishita:BtcGtTYXAUXn.i4@atlascluster.0culu.mongodb.net/todo2listDB',{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false
}, err => {
    if(err) console.log(`Error in DB Connection ${err}`)
    console.log(`MongoDB Connection Suceeded...`)
})

