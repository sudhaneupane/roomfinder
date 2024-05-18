import { Room } from "../models/room.model";
import { asyncHandler } from "../utils/asynchandler";

//Endpoint for adding room:
const addRoom = asyncHandler(async(req,res)=>{
    //fetching data from frontend:
    //checking :
    //
    const {name,location,capacity,description,amenities,image,price,availability}= req.body
    if(!name||!location||!capacity||!description||!image||!price||!availability){
        res.status(401).json({message:"All fields required"})
    }
    const roomAdding = Room.create({
        name,
        location,
        capacity,
        description,
        amenities,
        image,
        price,
        availability,
    })
    if(!roomAdding){
        res.status(500).json({message:"Something went wrong while registering room"})
    }
    res.status(200).json({message:"Success"})

})

export {addRoom}