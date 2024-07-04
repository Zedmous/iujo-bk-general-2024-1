import { Router } from "express";
import { validateFields } from "../middlewares";
import { locationController } from "../controllers";
import { locationValidator } from "../validators";
const locationValidator = new locationValidator();
const router = Router();
const locationController=new locationController();
router.get("/", locationController.all);//http://localhost:3800/api/roles
router.get("/:id", locationController.one);//http://localhost:3800/api/roles/1
router.post("/",locationValidator.validateRole,validateFields, locationController.createRole);//http://localhost:3800/api/roles
router.put("/:id",locationValidator.validateRole,validateFields, locationController.updateRole);//http://localhost:3800/api/roles/1
router.delete("/:id", locationController.deleteRole);//http://localhost:3800/api/roles/1
export default router;