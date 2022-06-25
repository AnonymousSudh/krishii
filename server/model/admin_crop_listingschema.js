const mongoose = require("mongoose");
const conn = require("../db/connection")

const uploadcrop = new mongoose.Schema({
    crop_namee : {
        type:String,
        require:true
    }
})



// const feedback_list = conn.adminn.model("feedback_lisst", feedback);
const uploadcropp = conn.adminn.model("crop_list", uploadcrop)
module.exports = uploadcropp
