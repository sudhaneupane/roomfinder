import { Booking } from "../models/booking.model";
import { asyncHandler } from "../utils/asynchandler";


const addBooking = asyncHandler(async(req,res)=>{
    const {user_id,room_id,checkIn,noOfPeople,totalPrice,status}= req.body
    if(!user_id||!room_id||!checkIn||!noOfPeople||!totalPrice||!status){
        res.status(401).json({message:"All fields required"})
    }
    const createBooking = await Booking.create({
        user_id,
        room_id,
        checkIn,
        noOfPeople,
        totalPrice,
        status

    })
    if(!createBooking){
        res.status(500).json({message:"Something went wrong while booking room"})
    }
    res.status(200).json({message:"Successfully booked room"})
})

const getBooking = asyncHandler(async(req,res)=>{
    const {user_id,room_id,checkIn,noOfPeople,totalPrice,status}= req.body
    if(!user_id||!room_id||!checkIn||!noOfPeople||!totalPrice||!status){
        res.status(401).json({message:"All fields required"})
    }
    const createBooking = await Booking.create({
        user_id,
        room_id,
        checkIn,
        noOfPeople,
        totalPrice,
        status

    })
    if(!createBooking){
        res.status(500).json({message:"Something went wrong while booking room"})
    }
    res.status(200).json({message:"Successfully booked room"})
})

export {addBooking,getBooking}