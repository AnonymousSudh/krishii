const mongoose = require("mongoose");
// const express = require("express")

const conn = require("../db/connection")
 
const upload_variety = new mongoose.Schema({

    variety_list: [
        {
            variety:
            {

                type: String
            }
        }
    ],
    crop_id: { type: mongoose.Schema.Types.ObjectId, ref:"crop_list" ,require: true }



    // tokens:[
    //     {
    //         token:{

    //             type:String,
    //             required:true
    //         }
    //     }
    // ]
})

const uploadVariey = conn.adminn.model("variety_list", upload_variety)

module.exports = uploadVariey