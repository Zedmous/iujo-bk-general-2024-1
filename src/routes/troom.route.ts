import { Router } from "express";
import { validateFields } from "../middlewares";
import { TroomController } from "../controllers";
import { TroomValidator } from "../validators";
const troomValidator = new TroomValidator();
const router = Router();
const troomController = new TroomController();
router.get("/", troomController.all);//http://localhost:3800/api/roles
router.get("/:id", troomController.one);//http://localhost:3800/api/roles/1
router.post("/",troomValidator.validateTroom,validateFields, troomController.createTroom);//http://localhost:3800/api/roles
router.put("/:id",troomValidator.validateTroom,validateFields, troomController.updateTroom);//http://localhost:3800/api/roles/1
router.delete("/:id", troomController.deleteTroom);//http://localhost:3800/api/roles/1
export default router;