const express = require("express");
const router = express.Router();
require('../db/connection');
const sell_crop_schema = require("../model/sell_crop_schema")

// router.get("/Sell_crops",(req,res)=>{
//     res.send("hello from the express side")
// });


router.post("/Sell_crops", async(req,res)=>{
    try {
        // console.log(req.body);
        const { crop_name,variety, price, quantity } = req.body

        if(!crop_name || !variety || !price || !quantity){

            return res.status(400).json({error:"enter all the details "})
            
            // alert("please fill all the data");
        }
        const userr = await sell_crop_schema({
            crop_name,variety, price, quantity
        }).save();

        res.json({ message:req.body})
        console.log(userr);

    } catch (err) {
        console.log(err);
    }


});

module.exports = router;