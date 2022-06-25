const mongoose = require('mongoose');
const admin_crop_list = require("../model/admin_crop_listingschema")
const admin_varietywithcropid_list = require("../model/admin_crop_varietyschema")

const sell_crop_schema = new mongoose.Schema({
    crop_name_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:admin_crop_list
    },
    variety_id:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:admin_varietywithcropid_list

        } 
    ,
    price: Number,
    quantity: Number,
    seller_id: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user_table'
        }
    

})

const sell_crop_list = new mongoose.model("sell_crop_details", sell_crop_schema);

module.exports = sell_crop_list;
