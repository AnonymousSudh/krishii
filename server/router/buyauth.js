const express = require("express");
const router = express.Router();
require('../db/connection');
const sellcrop = require("../model/sell_crop_schema")



router.get('/Buy_crops', async (req, res) => {
    res.send("helo from buy crop server")

    try {
        const distinct_crop = await sellcrop.distinct("crop_name")
        console.log(distinct_crop);
        const cropData = await sellcrop.find();
        var all_data = {
            cropname:distinct_crop,
            allselldata: cropData
        }
        // req.distinct_crop = distinct_crop
        res.status(201).json(all_data);
        // res.send(distinct_crop)
        // console.log(cropData);
        // console.log("hello from bye crop");

    } catch (error) {
        console.log(error);

    }
});

router.post('/Buy_crops', async(req,res)=>{
    const crop_name = req.body;
    console.log("crop_name form post ");
    console.log(crop_name);
})

module.exports= router;