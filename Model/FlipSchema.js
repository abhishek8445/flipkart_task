import mongoose from "mongoose";

const MobileSchema = mongoose.Schema({
    MobileImg :{
        type:String,
    },
    MobileDetails:{
        type:String,
    },
    MobileActualPrice:{
        type:String,
    },
    MobilePrice:{
        type:String,
    },
    MobileRating:{
        type:String,
    },
    MobileDetails:{
        type:String,
    },
})

const FlipkartModel = new mongoose.model("MobileData"  , MobileSchema )

export default FlipkartModel ; 