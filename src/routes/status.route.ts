import { Router } from "express";
import { validateFields } from "../middlewares";
import { StatusController } from "../controllers";
import { StatusValidator } from "../validators";

const statusValidator = new StatusValidator();
const router = Router();
const statusController=new StatusController();

router.get("/", statusController.all);//http://localhost:3800/api/statuses
router.get("/:id", statusController.one);//http://localhost:3800/api/statuses/1
router.post("/", statusValidator.validateStatus,validateFields, statusController.createStatus);//http://localhost:3800/api/statuses
router.put("/:id",statusValidator.validateStatus,validateFields, statusController.updateStatus);//http://localhost:3800/api/statuses/1
router.delete("/:id", statusController.deleteStatus);//http://localhost:3800/api/statuses/1

export default router;