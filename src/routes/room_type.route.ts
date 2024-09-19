import { Router } from "express";
import { validateFields } from "../middlewares";
import { RoomTypeController } from "../controllers";
import { RoomTypeValidator } from "../validators";
const troomValidator = new RoomTypeValidator();
const router = Router();
const troomController = new RoomTypeController();
router.get("/", troomController.all)
router.get("/:id", troomController.one);
router.post("/",troomValidator.validateTypeRoom,validateFields, troomController.createTroom);
router.put("/:id",troomValidator.validateTypeRoom,validateFields, troomController.updateTroom);
router.delete("/:id", troomController.deleteTroom);
export default router;