import { Router } from "express";
import { validateFields } from "../middlewares";
import { TypeTransportController } from "../controllers";
import { TypeTransportValidator } from "../validators";
const typeTransportValidator = new TypeTransportValidator();
const router = Router();
const typeTransportController=new TypeTransportController();
router.get("/", typeTransportController.all);//http://localhost:3800/api/roles
router.get("/:id", typeTransportController.one);//http://localhost:3800/api/roles/1
router.post("/",typeTransportValidator.validatetiptransp,validateFields, typeTransportController.createtypeTransport);//http://localhost:3800/api/roles
router.put("/:id",typeTransportValidator.validatetiptransp,validateFields, typeTransportController.updatetypeTransport);//http://localhost:3800/api/roles/1
router.delete("/:id", typeTransportController.deletetypeTransport);//http://localhost:3800/api/roles/1
export default router;