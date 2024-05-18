import { addBooking } from "../controllers/booking.controler";
import Router from 'express'
const router = Router()
router.route('/addBooking').post(addBooking)

export default router