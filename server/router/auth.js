const express = require("express");
const router = express.Router();
require('../database/connect');
const AllCategory = require("../models/ProjectChatagorySchema")
const AllUser = require("../models/UserSchema")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate")
const cookieParser = require("cookie-parser");

router.use(cookieParser());

//HOME ROUTER ===============================

router.get("/", (req, res ) => {
    res.send("HELLO FORM ROUTER");
});

router.post("/register", async (req, res) => {

    const { full_name, email, profession, position , country,working_style,programming_language, phone, password, cpassword } = req.body;
    
    if (!full_name || !email || !profession || !position || !country || !working_style || !programming_language || !phone || !password || !cpassword) {
        return res.status(421).json({ error: "PLESE FILL ALL THE FEILD" });
    } else {
        try {

            const UserExist = await AllUser.findOne({ email: email });
            if (UserExist) {
                return res.status(422).json({ error: "This Email Already Exist" });
            } else {
                if (password === cpassword) {

                    const rand = Math.floor(Math.random() * 1000000000);
                    const UserNameExist = await AllUser.findOne({ userName: full_name.replace(/\s+/g, '').trim().toLowerCase() });
                    var userName = ""
                    var text="jie skie ksi"
                    if(UserNameExist){
                        const full_name_new = full_name.replace(/\s+/g, '').trim().toLowerCase()
                        userName = `${full_name_new}${rand}`
                    }else{
                        userName  = full_name.replace(/\s+/g, '').trim().toLowerCase();
                    }

                    const registerUser = new AllUser({
                        full_name,userName, email, profession, position , country,working_style,programming_language, phone, password
                    });
                    // const registerTask = new AllTask({
                    //     userName
                    // });


                    const registeredUser = await registerUser.save();
                    // const registeredTask = await registerTask.save();


                    if (registeredUser || registeredTask) {
                        res.status(200).json({ messege: "Detail Saved" })
                    }
                } else {
                    res.status(401).json({ error: "Your Password Is Not Same !" });
                }
            }
        } catch (err) {
            res.status(400).json({ error: `${err}` })
            console.log(err);
        }

    }

});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "Plese Fill All The Fill" });
    } else {
        try {
            const findEmail = await AllUser.findOne({ email: email });

            if (findEmail) {
                const isMatch = await bcrypt.compare(password, findEmail.password);
                const token = await findEmail.generateAuthToken();

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000)
                })

                if (isMatch) {
                    res.send("LOGIN SUCCESSFULL");
                } else {
                    res.status(400).json({ error: "Invalid Login !" });
                }
            } else {
                res.status(400).json({ error: "Invalid Login !" });
            }


        } catch (error) {
            res.status(400).json({ error: "Something Went Wrong" });
            console.log(error);
        }
    }
});

router.post("/logintest", async (req, res) => {
    const { email, password } = req.body;
    try{
        password = bcrypt.hash(password, 12);
        console.log(password)
    }catch(err){
        res.send(err)
    }
    
    
});



router.post("/entryRegister", async (req, res) => {

    const { projectChatagoryListBy,chateryList } = req.body;
    
        try {

            
                

                    // const rand = Math.floor(Math.random() * 1000000000);

                    // const userName = `${fname}${rand}`

                    const entryCategory = new AllCategory({
                        projectChatagoryListBy,chateryList
                    });
                    
                    // console.log(entryCategory)

                    const registeredUser = await entryCategory.save();
                    // const registeredTask = await registerTask.save();


                    if (registeredUser ) {
                        res.status(200).send({ messege: "Detail Saved" })
                    }
                
            
        } catch (err) {
            res.status(400).json({ error: `${err}` })
            console.log(err);
        }

    

});

router.get("/today", authenticate, (req, res) => {
    res.send(req.rootUser);
    console.log(req.rootUser)
})

module.exports = router;