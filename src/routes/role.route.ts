import { Router } from "express";
import { validateFields } from "../middlewares";
import { RoleController } from "../controllers";
import { RoleValidator } from "../validators";
const router = Router();
const roleValidator = new RoleValidator();
const roleController = new RoleController();
router.get("/report", roleController.reportExcel);
router.get("/", roleController.all); 
router.get("/:id", roleController.one); 
router.post(
  "/",
  roleValidator.validateRole,
  roleValidator.validateIfNameIsUse,
  validateFields,
  roleController.createRole
); 
router.put(
  "/:id",
  roleValidator.validateRole,
  roleValidator.validateIfNameIsUse,
  validateFields,
  roleController.updateRole
);
router.delete("/:id", roleController.deleteRole); 
export default router;
