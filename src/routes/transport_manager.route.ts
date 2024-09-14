import { Router } from "express";
import { validateFields } from "../middlewares";
import { TransportManagerController } from "../controllers";
import { TransportManagerValidator } from "../validators";
const TransportmanagerValidator = new TransportManagerValidator();
const router = Router();
const TransportmanagerController=new TransportManagerController();
router.get("/", TransportmanagerController.all);//http://localhost:3800/api/roles
router.get("/:idResponsable", TransportmanagerController.one);//http://localhost:3800/api/roles/1
router.post("/",TransportmanagerValidator.validatetranspmanager,validateFields, TransportmanagerController.createTransportmanager);//http://localhost:3800/api/roles
router.put("/:idResponsable",TransportmanagerValidator.validatetranspmanager,validateFields, TransportmanagerController.updateTransportmanager);//http://localhost:3800/api/roles/1
router.delete("/:idResponsable", TransportmanagerController.deleteTransportmanager);//http://localhost:3800/api/roles/1
export default router;