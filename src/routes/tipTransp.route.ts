import { Router } from "express";
import { validateFields } from "../middlewares";
import { tipTranspController } from "../controllers";
import { tipTranspValidator } from "../validators";
const tTranspValidator = new tipTranspValidator();
const router = Router();
const tTranspController=new tipTranspController();
router.get("/", tTranspController.all);//http://localhost:3800/api/roles
router.get("/:id", tTranspController.one);//http://localhost:3800/api/roles/1
router.post("/",tTranspValidator.validatetiptransp,validateFields, tTranspController.createtipTransp);//http://localhost:3800/api/roles
router.put("/:id",tTranspValidator.validatetiptransp,validateFields, tTranspController.updatetipTransp);//http://localhost:3800/api/roles/1
router.delete("/:id", tTranspController.deletetipTransp);//http://localhost:3800/api/roles/1
export default router;