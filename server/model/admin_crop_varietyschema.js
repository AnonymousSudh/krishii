const mongoose = require("mongoose");
// const express = require("express")
// const admin_crop_list = require("../model/admin_crop_listingschema")
// const admin_varietywithcropid_list = require("../model/admin_crop_varietyschema")
// const userschema= require("../model/userschema")


// const conn = require("../db/connection")
 
const upload_variety = new mongoose.Schema({

    crop_id: { type: mongoose.Schema.Types.ObjectId, ref:"crop_list"  },
    variety_listt: [
        {
            variety: String
            
        }
    ],

})

const uploadVariey = new mongoose.model("variety_list", upload_variety)

module.exports = uploadVariey