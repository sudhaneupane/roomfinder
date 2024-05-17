import { app } from "./app.js";
import { connectDB } from "./db/db.js";
// import mongoose from "mongoose";
// import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
})

connectDB().then(()=>{
    app.listen(process.env.port || 8080,()=>{
        console.log('App is running on port 8080');
    }
    )
}).catch((err)=>{
    console.log(`Mongodb connection failed err::${err}`);

})