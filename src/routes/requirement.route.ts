import { Router } from "express";
import { validateFields } from "../middlewares";

import { RequirementsController } from "../controllers";
import { RequirementsValidator } from "../validators";


const requirementsValidator = new RequirementsValidator();
const router = Router();
const requirementsController=new RequirementsController();
router.get("/", requirementsController.all);//http://localhost:3308/api/requirements
router.get("/:id", requirementsController.one);//http://localhost:3308/api/requirements/1
router.post("/",requirementsValidator.validateRequirements,validateFields, requirementsController.createRequirement);//http://localhost:3308/api/requirements
router.put("/:id",requirementsValidator.validateRequirements,validateFields, requirementsController.updateRequirement);//http://localhost:3308/api/requirements/1
router.delete("/:id", requirementsController.deleteRequirement);//http://localhost:3308/api/requirements/1
export default router;