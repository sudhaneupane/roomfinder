import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    location:{
        type:String,
        required:true,
    },
    capacity:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    amenities:{
        type:String,

    },
    image:{
        type:String,//url of image 
        required:true,
    },
    availability:{
        type:Boolean,
        required:true,
    }
})

export const Room = mongoose.model("Room",roomSchema);