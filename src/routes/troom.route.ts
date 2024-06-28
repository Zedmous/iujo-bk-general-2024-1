import { Router } from "express";
import { validateFields } from "../middlewares";
import { TroomController } from "../controllers";
import { TroomValidator } from "../validators";
const troomValidator = new TroomValidator();
const router = Router();
const troomController = new TroomController();
router.get("/", troomController.all)
router.get("/:id", troomController.one);
router.post("/",troomValidator.validateTroom,validateFields, troomController.createTroom);
router.put("/:id",troomValidator.validateTroom,validateFields, troomController.updateTroom);
router.delete("/:id", troomController.deleteTroom);