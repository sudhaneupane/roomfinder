import { registerUser,checkUserCredentials } from "../controllers/user.controller.js";
import { Router } from "express";
const router=Router()

router.route('/register').post(registerUser)
router.route('/login').post(checkUserCredentials)

export default router