import { Router } from "express";
import { validateFields } from "../middlewares";
import { TransportTypeController } from "../controllers";
import { TransportTypeValidator } from "../validators";
const router = Router();
const typeTransportValidator = new TransportTypeValidator();
const typeTransportController=new TransportTypeController();
router.get("/", typeTransportController.all);//http://localhost:3800/api/roles
router.get("/:id", typeTransportController.one);//http://localhost:3800/api/roles/1
router.post("/",typeTransportValidator.validatetiptransp,validateFields, typeTransportController.createtypeTransport);//http://localhost:3800/api/roles
router.put("/:id",typeTransportValidator.validatetiptransp,validateFields, typeTransportController.updatetypeTransport);//http://localhost:3800/api/roles/1
router.delete("/:id", typeTransportController.deletetypeTransport);//http://localhost:3800/api/roles/1
export default router;