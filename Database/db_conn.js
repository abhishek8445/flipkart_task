import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const MongoConnection = async ()=>{
  try{
    await mongoose.connect(process.env.DB_PORT)
    console.log(`Db connection Successfully`);
  }
  catch(err){
    console.log(err);
  }
}

export default MongoConnection
