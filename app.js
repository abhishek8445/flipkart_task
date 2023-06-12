import express from 'express';
import MongoConnection from './Database/db_conn.js'
import Router from './Routes/UserRouter.js';
import dotenv from 'dotenv'
dotenv.config();

const app = express()
const PORT = process.env.PORT
app.use(express.json())

MongoConnection()

app.use('/fetch' , Router )


app.listen(PORT , ()=>{
    console.log(`server run on http://localhost:${PORT}`);
})