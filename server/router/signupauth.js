const express = require("express")
const router = express.Router();


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
