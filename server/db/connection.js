
const mongoose= require("mongoose");
// const dotenv = require("dotenv");

const db = process.env.DATABASE;
const db_admin = process.env.ADMINDATABASE;

// const db = 'mongodb+srv://sudhanshu:sudhanshu@cluster0.6slmj.mongodb.net/login?retryWrites=true&w=majority'
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false

})

.then(()=>console.log("connected succesfully"))
.catch((err)=> console.log(err));

mongoose.adminn = mongoose.createConnection(db_admin,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false

})
// // .then(()=>console.log("connected succesfully"))
// // .catch((err)=> console.log(err));

module.exports =mongoose;

