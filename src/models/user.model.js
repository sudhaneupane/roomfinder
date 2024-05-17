import mongoose,{Schema} from "mongoose";

const userModel=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String
    }

},{timestamps:true})

export const User=mongoose.model("User",userModel)
