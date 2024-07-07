import { Router } from "express";
import { validateFields } from "../middlewares";
import { ServiceController } from "../controllers";
import { ServiceValidator } from "../validators";

const serviceValidator:ServiceValidator = new ServiceValidator();
const router = Router();
const serviceController:ServiceController=new ServiceController();

router.get("/", serviceController.all);//http://localhost:3800/api/roles
router.get("/:id", serviceController.one);//http://localhost:3800/api/roles/1
router.post("/",serviceValidator.validateService,validateFields, serviceController.createRole);//http://localhost:3800/api/roles
router.put("/:id",serviceValidator.validateService,validateFields, serviceController.updateRole);//http://localhost:3800/api/roles/1
router.delete("/:id", serviceController.deleteRole);//http://localhost:3800/api/roles/1

export default router;