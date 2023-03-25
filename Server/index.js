const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const mansDb = require('./mansDb')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/',async(req,res)=>{
    res.json(await mansDb.getData())
})

app.post('/',async (req,res)=>{
    console.log(req.body)
    await mansDb.insertDate(req.body)
    res.send('data was great - thanks')
})

app.listen(3000,()=>{
    console.log('server is up')
})