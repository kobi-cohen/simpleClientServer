const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const usersDb = require('./usersDb')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/',async(req,res)=>{
    res.json(await usersDb.getUser())
})

app.post('/',async (req,res)=>{
    console.log(req.body)
    await usersDb.insertUser(req.body)
    res.send('data was great - thanks')
})

app.listen(3000,()=>{
    console.log('server is up')
})