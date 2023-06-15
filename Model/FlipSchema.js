import mongoose from "mongoose";

const MobileSchema = mongoose.Schema({
    MobileImg :{
        type:String,
    },
    MobileName:{
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

const TshirtSchema =  mongoose.Schema({
    TshirtImg :{
        type:String
    },
    TshirtName :{
        type:String
    },
    TshirtPrice :{
        type:String
    },
    Discount :{
        type:String
    },
})
const TshirtModel = mongoose.model("TshirtData" , TshirtSchema )

export  {FlipkartModel , TshirtModel } ; 