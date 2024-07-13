import { Router } from "express";
import { validateFields } from "../middlewares";
import { StaffController } from "../controllers";
import { StaffValidator} from "../validators";
const router = Router();
const staffValidator = new StaffValidator();
const staffController=new StaffController();
router.get("/", staffController.all);//http://localhost:3800/api/roles
router.get("/:id", staffController.one);//http://localhost:3800/api/roles/1
router.post("/",staffValidator.validateStaff,validateFields, staffController.createRole);//http://localhost:3800/api/roles
router.put("/:id",staffValidator.validateStaff,validateFields, staffController.updateRole);//http://localhost:3800/api/roles/1
router.delete("/:id", staffController.deleteRole);//http://localhost:3800/api/roles/1
export default router;