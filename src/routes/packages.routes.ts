import { Router } from "express";
import { validateFields } from "../middlewares";
import { PackagesController } from "../controllers";
// import { RoleValidator } from "../validators";
// const roleValidator = new RoleValidator();
const router = Router();
const packagescontroller=new PackagesController();
router.get("/", packagescontroller.all);//http://localhost:3308/api/packages
// router.get("/:id", roleController.one);//http://localhost:3800/api/roles/1
// router.post("/",roleValidator.validateRole,validateFields, roleController.createRole);//http://localhost:3800/api/roles
// router.put("/:id",roleValidator.validateRole,validateFields, roleController.updateRole);//http://localhost:3800/api/roles/1
// router.delete("/:id", roleController.deleteRole);//http://localhost:3800/api/roles/1
export default router;