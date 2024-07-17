import { Router } from "express";
import { validateFields } from "../middlewares";
import { ComponentsController } from "../controllers";
import { ComponentsValidator } from "../validators";
const componentsValidator = new ComponentsValidator();
const router = Router();
const componentsController=new ComponentsController();
router.get("/", componentsController.all);//http://localhost:3800/api/components
router.get("/:id", componentsController.one);//http://localhost:3800/api/components/1
router.post("/",componentsValidator.validateComponents,validateFields, componentsController.createComponents);//http://localhost:3800/api/components
router.put("/:id",componentsValidator.validateComponents,validateFields, componentsController.updateComponents);//http://localhost:3800/api/components/1
router.delete("/:id", componentsController.deleteComponents);//http://localhost:3800/api/components/1
export default router;