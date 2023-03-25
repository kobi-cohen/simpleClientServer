const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test')
const mansSchema = new mongoose.Schema({name:String,phone:String})

const mans  = mongoose.model('mans',mansSchema)



const insertDate = ({name,phone})=>{

    
    mans({name:name,phone:phone}).save()
}

const getData =()=>{

    
    const list = mans.find()
    return   list
}


module.exports={getData,insertDate}