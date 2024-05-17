import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asynchandler.js";

const registerUser = asyncHandler(async () => {});
    const {email,password,phone}=req.body;
    try {
        const userCreate=await User.create({
            email,
            password,
            phone
        })
        res.status(201).json("User created succesfully")
        
    } catch (error) {
        console.log(error);
        res.send(500).json("Cannot create user")
    }

    const checkUserExistence=asyncHandler(async(req,res)=>{
        try {
            if (userCheck) {
                res.send(500).json("User already exist")
            }
            const userCheck=await User.find({
                phone,
                email,
                password
            })
        } catch (error) {
            console.log(error);   
        }
    })
    const checkUserCredentials=asyncHandler(async(req,res)=>{

    })


export { 
    registerUser,
    checkUserExistence,
    checkUserCredentials
 };
