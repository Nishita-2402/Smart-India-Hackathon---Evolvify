const express = require('express')
const note = require('../models/noteSchema')
const app = express();

app.get('/dailyDiary' , (req,res) => {
    note.find((err,docs) => {
        if(err) console.log(err)
        res.json(docs)
    })
})

app.post('/dailyDiary',(req,res) => {
    const note = new Note(req.body)
    note.save((err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
})


app.delete('/dailyDiary:id',(req,res) => {
    note.findByIdAndDelete(req.params.id,(err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
})

module.exports = app