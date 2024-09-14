import { Router } from "express";
import { validateFields } from "../middlewares";
import { AttractionsStatusController } from "../controllers";
import { AttractionsStatusValidator } from "../validators";

const attractionsStatusValidator = new AttractionsStatusValidator();
const router = Router();
const attractionsStatusController=new AttractionsStatusController();

router.get("/", attractionsStatusController.all);//http://localhost:3800/api//attractionstatus
router.get("/:id", attractionsStatusController.one);//http://localhost:3800/api//attractionstatus/1
router.post("/", attractionsStatusValidator.validateStatus,validateFields, attractionsStatusController.createStatus);//http://localhost:3800/api//attractionstatus
router.put("/:id",attractionsStatusValidator.validateStatus,validateFields, attractionsStatusController.updateStatus);//http://localhost:3800/api//attractionstatus/1
router.delete("/:id", attractionsStatusController.deleteStatus);//http://localhost:3800/api//attractionstatus/1

export default router;