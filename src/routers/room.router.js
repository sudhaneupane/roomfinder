import { addRoom, getRoom } from "../controllers/room.contoller";
import Router from 'express'
const router = Router()

router.route('/addRoom').post(addRoom)
router.route('/getRoom').get(getRoom)

export default router