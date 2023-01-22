const mongoose = require("mongoose")

const ProjectAll = new mongoose.Schema({
    projectId:{
        type:String,
        require:true
    },
    projectName:{
        type:String
   },
   projectMembers:[
    {
        userName:{
            type:String
        }
    }
   ]
})

const AllProjectSchema = new mongoose.model("ProjectDetail",AllProjectSchema)

module.exports = AllProjectSchema