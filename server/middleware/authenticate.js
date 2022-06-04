const jwt = require("jsonwebtoken");
const User = require("../model/userschema");

const Authenticate = async (req, res, next) => {


    try {


        // const goole_token = req.cookies.google_token;``
        // const google_user = await User.findOne({ google_token: goole_token });
        // req.rootUser = google_user;
        // next();




        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });// here we match the token with all the database and "rootuser" willl have the specific user data
        // const token = req.cookies.jwtoken;
        // console.log(token);
        // const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        // console.log("this is jwt token");
        console.log(verifyToken);
        // console.log(rootUser);

        req.rootUser = rootUser;
        next();





        // const token = req.cookies.jwtoken;
        //     console.log("this is token from aunthicate");
        //     console.log(token);
        //     const verifyToken = jwt.verify(token, process.env.SECRET_KEY); // "verifytoken" have all the data present in whole database after verifing the jwt.

        // const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });// here we match the token with all the database and "rootuser" willl have the specific user data
        // console.log(rootUser);
        //     if (!rootUser) { throw new Error('User not found') }

        //     req.token = token;
        //     req.rootUser = rootUser;
        //     req.userID = rootUser._id;

        //     next();
        // }






    } catch (err) {


        res.status(401).send('unauthorized : no token provided');
        console.log("this is error");
        console.log(err);

    }

}

module.exports = Authenticate;