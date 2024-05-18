import { addRoom } from "../controllers/room.contoller";
import Router from 'express'
const router = Router()

router.route('/addRoom').post(addRoom)

export default router