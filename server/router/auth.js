// const { LOADIPHLPAPI } = require("dns");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require('../db/connection');

const feedback_list = require("../model/adminschema");
const userList = require("../model/userschema");
const emaillogindata = require("../model/emailloginschema");
const sellcrop = require('../model/sell_crop_schema')
const authenticate = require("../middleware/authenticate");
const nodemailer = require("nodemailer");
// require('../crop/buycrop')
// require('./buyauth');

const cookieParser = require("cookie-parser");
router.use(cookieParser())

// import { useNavigate,useHistory } from 'react-router-dom';

// port= process.env.PORT; 
// port= 5000;

// router.get("/",(req,res)=>{
//     res.send("hello from the express router from router/auth file")
// });
// router.get("/home", (req,res)=>{
//     res.send("hello from the home us page of express router from router/auth file")
// });
// router.get("/signin",(req,res)=>{
//     res.send("hello from the express side")
// });
// router.get("/signup",(req,res)=>{
//     res.send("hello from the express side")
// });



// creating a post method for signup page , so that user data may get save to our database

router.post("/signup", async (req, res) => {

    // console.log(req.body);
    const google_data = req.body;
    const user_google_data = google_data.response.profileObj;
    const user_id_token = google_data.response.tokenId;

    const email = user_google_data.email;
    const imageuri = user_google_data.imageUrl;
    const name = user_google_data.name;
    const google_token = google_data.response.tokenId;


    const pre_email = await userList.findOne({ email: email })

    if (!pre_email) {

        const user = await userList({
            name, email, imageuri, google_token
        }).save();

        res.cookie("google_token", google_token, { // here we storing our token in cookies
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true

        })

        return res.status(203).send();


    }

    if (pre_email) {
        if (pre_email.email == "mauryasudhanshu930@gmail.com") {
            res.status(204).send();
        }

        const update = await userList.updateOne({ _id: pre_email._id }, {
            $set: {
                google_token
            }
        }
        );

        // console.log(update);

        res.cookie("google_token", google_token, { // here we storing our token in cookies
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        })

      
        return res.status(201).send();

    }



   

});

router.post('/signup_email', async (req, res) => {
    console.log(req.body);

    try {
        const { name, email, password, address, phoneno } = req.body;
        console.log(email);
        // generate random otp here 
        const otp = Math.floor(Math.random() * 10000)
        // userList.findOne({ email: login_email, password: login_password });
        const pre_email = await userList.findOne({ email: email });
        console.log("this is ");
        console.log(pre_email);

        if (!pre_email) {

            const email_login_data = await emaillogindata({
                name,email, password, address, phoneno, otp
            }).save()

            async function main() {

                // create reusable transporter object using the default SMTP transport
                const transporter = nodemailer.createTransport({
                    service: "hotmail",
                    auth: {
                        user: process.env.MAIL_ACC,
                        pass: process.env.MAIL_PASS,
                    },
                });

                const options = {
                    from: process.env.MAIL_ACC,
                    to: `${email}`,
                    subject: "Your OPT For Krishi",
                    text: `this is ${otp}`
            
                }

                const info = await transporter.sendMail(options);
                console.log(info);

            }

            main().catch(console.error);

            res.status(201).send();
        }




    } catch (error) {
        console.log(error);

    }

})

router.post('/validate_data' ,async(req,res)=>{
    const otp = req.body.otp;
     try {
        const validate = await userList.findOne({otp:otp});

        if(validate){
            res.status(201).send();
        
        }
        else{
            res.status(401).send();
        }
     } catch (error) {
         
     }
 
    
})

router.post('/adminpanel', async (req, res) => {

    const namee = req.body;
    const name = namee.name;

    const dataas = await feedback_list({
        name
    }).save();

})




//creating post method to get the data which a user fill in sign_in box(email, password)
router.post("/signin", async (req, res) => {

    try {
        // we are getting all the data through object descrutering 
        const { login_email, login_password } = req.body

        // check validataion if user fill the box or not
        if (!login_email || !login_password) {

            res.status(402).json("please fill the data")
        }
        // search for data that the user enter with our database table in mongodb

        const result = await userList.findOne({ email: login_email, password: login_password });
        console.log("hi how are u");
        console.log(result);


        if (result) {
            // const isMatch = await bcrypt.compare(password, userLogin.password)
            console.log("hello 1");
            token = await result.generateAuthToken();
            console.log("hello 2");
            console.log(token)
            console.log("hello 3");

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true


            })
        }





        if (result != null) {
            // console.log(result.email);
            console.log("All data of that user is : ");
            // console.log(result);

            // token = await result.generateAuthToken();        
            // res.cookie("jwtokenn" ,token,{
            //     expires: new Date(Date.now() + 3000009900),
            //     httpOnly:true
            // });
            res.status(200).send();

       
        }
        else {
            res.status(400).json({ error: "user error" })
            // alert("invalid details")
        }


    } catch (err) {
        console.log(err);
    }



});



router.post('/Enter_details', authenticate, async (req, res) => {
    try {
        const token = req.cookies.google_token;
        console.log(req.body);
        const { phoneno, address, usertype } = req.body
        // console.log(phoneno);



        // const update = await userList.update({ google_token: token }, {
        //     $set: {name: '85767'}
        // })

        // const update = await userList.insert( { item: "card"} )

        // const update = await userList.aggregate([
        //     {
        //        $addFields:{"phonemo":3300} 
        //     }
        // ])
        const update = await userList.updateMany({ google_token: token },
            [
                {
                    "$addFields": { "phoneno": phoneno }

                },
                {
                    "$addFields": { "address": address }
                },
                {
                    "$addFields": { "usertype": usertype }
                }
            ])

        // const data = await userList.findOne({ google_token: token })
        // console.log(data);

        res.status(201).send();

    } catch (err) {
        console.log(err);
    }

    // console.log();
    // res.status(201).json(email);

})

router.get('/about', authenticate, (req, res) => {

    console.log(req.rootUser);
    res.send(req.rootUser);

})


router.get('/weather', authenticate, async (req, res) => {

    console.log(req.rootUser);
    try {
        res.send(req.rootUser);

        const address = await userList.find();
        res.status(200).json(address);
    } catch (err) {
        console.log(err);
    }
    res.send(req.rootUser);

})

module.exports = router;