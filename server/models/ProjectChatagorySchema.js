const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const projectChategoryAll = new mongoose.Schema({
    projectChatagoryListBy:{
        type:String
    },
    chateryList:[{
        type:String    
    }]
});

const AllCategory = new mongoose.model("ProductCategory", projectChategoryAll);

module.exports = AllCategory;