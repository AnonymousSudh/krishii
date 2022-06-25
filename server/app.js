// const { log } = require("console")
const mongoose= require("mongoose")
const express = require("express");
const app = express();


const dotenv = require("dotenv")
dotenv.config({path:'./config.env'})
const port= process.env.PORT; 
require('./db/connection');

app.use(express.json());


app.use(require("./router/auth"));
app.use(require("./router/sellauth"));
app.use(require("./router/buyauth"));
app.use(require("./router/signupauth"));
app.use(require("./router/admin"));
// app.use(require("../"))
// app.use(require("./router/"))

// const s = require("../client/src/components/Sell_crops")



// app.use(require("./router/sellauth"));

// jb bhi koi user koi bhi data server pr send karega wo data json() format he hoga. but server does't undersatand json. it will only understand string.. so, this line will convert all the json data in string

// for selling Sell_crops
// app.use(require("./crop/sellcrop"));



// app.use(express.json());

// db conection

// const db = process.env.DATABASE;
// const db = 'mongodb+srv://sudhanshu:sudhanshu@cluster0.6slmj.mongodb.net/login?retryWrites=true&w=majority'


// mongoose.connect(db,{

//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false

// })
// .then(()=>console.log("connected succesfully"))
// .catch((err)=> console.log(err));




// app.listen(port, ()=>{
//     console.log(`listening to  port no ${port}`)
// })

app.listen(port, ()=>{
    console.log(`listening to  port no ${port}`)
})