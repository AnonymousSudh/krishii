const mongoose = require('mongoose');

const sell_crop_schema = new mongoose.Schema({
    crop_name: String,
    variety: String,
    price: Number,
    quantity: Number,
    
})

const sell_crop_list = new mongoose.model("sellcropdetails", sell_crop_schema);

module.exports = sell_crop_list;
