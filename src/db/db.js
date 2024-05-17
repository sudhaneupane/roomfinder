import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

const connectDB=async()=>{
    try {
        const connection=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Mongodb connected:HOST::${connection.connection.host}`);
    } catch (error) {
        console.log(`MongoBD connection failed: ${error}`);
        process.exit(1);
        
    }
}

export {connectDB}