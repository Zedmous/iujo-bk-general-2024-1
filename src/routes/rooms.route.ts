import { Router } from "express";
import { validateFields } from "../middlewares";
import { RoomsController } from "../controllers/rooms.controller";
import { RoomsValidator } from "../validators/rooms.validator";
const roomsValidator = new RoomsValidator();
const router = Router();
const roomsController=new RoomsController();
router.get("/", roomsController.all);//http://localhost:3800/api/roles
router.get("/:id", roomsController.one);//http://localhost:3800/api/roles/1
router.post("/",roomsValidator.validateRoom,validateFields, roomsController.createRooms);//http://localhost:3800/api/roles
router.put("/:id",roomsValidator.validateRoom,validateFields, roomsController.updateRooms);//http://localhost:3800/api/roles/1
router.delete("/:id", roomsController.deleteRooms);//http://localhost:3800/api/roles/1
export default router;