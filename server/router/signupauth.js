const express = require("express");
const userList = require("../model/userschema");
const router = express.Router();
const nodemailer = require("nodemailer")


router.post('/signup_email', async (req, res) => {
    console.log(req.body);

    try {
        const { name, email, password, address, phoneno } = req.body;
        // generate random otp here 
        const otp = Math.floor(Math.random() * 10000)
        // userList.findOne({ email: login_email, password: login_password });
        const pre_email = await userList.findOne({ email: email });
 
        console.log(`this is email from signAUHT ${pre_email}`);

        if(!name || !email || !password || !address || !phoneno){
            res.status(400).send();
        }

        else if(pre_email){
            res.status(422).send();

        }


        else if (!pre_email) {

            
       

            const email_login_data = await userList({
                name,email, password, address, phoneno, otp
            }).save()

            res.cookie("google_token", google_token, { // here we storing our token in cookies
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
    
            })

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
                    text: `Dear valuable Krishi, ${otp} is your OTP`
            
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

router.post('/validate_otp' ,async(req,res)=>{
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
         res.send(error)
         console.log(error);
         
     }
 
    
})
module.exports = router;