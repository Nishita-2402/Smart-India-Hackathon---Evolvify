const express = require('express')
const task = require('../models/todoSchema')
const app = express();



app.get('/App' , (req,res) => {
    task.find((err,docs) => {
        if(err) console.log(err)
        res.json(docs)
    })
})

app.post('/App',(req,res) => {
    const task = new Task(req.body)
    task.save((err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
})

app.put('/App:_id',(req,res) => {
    task.findOneAndUpdate({
        _id : req.params.id
    },req.body,{
        new : true
    },(err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
})

app.delete('/App:_id',(req,res) => {
    task.findByIdAndDelete(req.params.id,(err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
})

module.exports = app