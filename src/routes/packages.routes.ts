import { Router } from "express";
import { validateFields } from "../middlewares";
import { PackagesController } from "../controllers";
import { PackagesValidator} from "../validators";
const packagesValidator = new PackagesValidator();
const router = Router();
const packagescontroller=new PackagesController();
router.get("/", packagescontroller.all);//http://localhost:3308/api/packages
router.get("/:id", packagescontroller.one);//http://localhost:3308/api/packages/1
router.post("/", packagesValidator.validatePackages, validateFields, packagescontroller.createPackage);//http://localhost:3308/api/packages
router.put("/:id", packagesValidator.validatePackages, validateFields, packagescontroller.updatePackage);//http://localhost:3308/api/packages/1
router.delete("/:id", packagescontroller.deletePackage);//http://localhost:3308/api/packages/1
export default router;