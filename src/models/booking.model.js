import mongoose from 'mongoose'
const bookingSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Types.Schema.user_id,
        ref:'User',
        required:true,
    },
    room_id:{
        type:mongoose.Types.Schema.room_id,
        ref:'Room',
        required:true,

    },
    checkIn:{
        type:Date,
        required:true,
    },
    noOfPeople:{
        type:Number,
        required:true,
    },
    totalPrice:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:['confirmed','pending','booked']
    },
},{
    timestamps:true,
})

export const Booking = mongoose.model("Booking",bookingSchema)