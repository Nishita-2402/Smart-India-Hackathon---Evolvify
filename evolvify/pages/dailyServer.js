const express = require('express')
const cors = require('cors')
const router = require('./api/dailyDiary')
const app = express()
require('../lib/notes')
app.use(express.json())
app.use(cors())
app.use('/api/notes' , router)
app.listen('8000' , err => {
    if(err) console.log(err)
    console.log('Server is started at PORT number : 8000')
})