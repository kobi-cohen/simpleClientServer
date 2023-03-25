const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:root@cluster0.gcqx0rp.mongodb.net/test')
const usersSchema = new mongoose.Schema({name:String,phone:String})

const users  = mongoose.model('users',usersSchema)



const insertUser = ({name,phone})=>{

    
    users({name:name,phone:phone}).save()
}

const getUser =()=>{

    
    const list = users.find()
    return list
}


module.exports={getUser,insertUser}