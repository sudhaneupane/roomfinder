import { addBooking,getBooking } from "../controllers/booking.controler";
import Router from 'express'
const router = Router()
router.route('/addBooking').post(addBooking)
router.route('/getBooking').post(getBooking)

export default router