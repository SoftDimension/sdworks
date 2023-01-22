const mongoose = require("mongoose")

const ProjectTask = mongoose.Schema({
    projectName:{
        type:String
    },
    userId:{
        type:String
    },
    tasks:[{
        task:{type:String},
        date:{date}
    }]
})