import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const mongoUrl=process.env.MONGO_URL

//step1-conect to db
mongoose.connect(mongoUrl)

//get default connection
export const db=mongoose.connection

//evenet listen
db.on('connected',()=>{
    console.log("mongoDB connected successfully")
})
db.on('error',(err)=>{
    console.error("error connecting to mongodb",err)
})
db.on('disconnected',()=>{
    console.log("mongoDB disconnected")
})
