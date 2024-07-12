import { Router } from "express";
import { validateFields } from "../middlewares";
import { TroomController } from "../controllers";
import { TypeRoomValidator } from "../validators";
const troomValidator = new TypeRoomValidator();
const router = Router();
const troomController = new TroomController();
router.get("/", troomController.all)
router.get("/:id", troomController.one);
router.post("/",troomValidator.validateTypeRoom,validateFields, troomController.createTroom);
router.put("/:id",troomValidator.validateTypeRoom,validateFields, troomController.updateTroom);
router.delete("/:id", troomController.deleteTroom);
export default router;