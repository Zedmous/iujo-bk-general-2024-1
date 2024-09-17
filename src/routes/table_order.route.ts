import { Router } from "express";
import { validateFields } from "../middlewares";
import { TableOrderController } from "../controllers";
import { TableOrderValidator } from "../validators";
const tableOrderValidator = new TableOrderValidator();
const router = Router();
const tableOrderController=new TableOrderController();
router.get("/", tableOrderController.all);//http://localhost:3800/api/order
router.get("/:id", tableOrderController.one);//http://localhost:3800/api/order/1
router.post("/",tableOrderValidator.validateOrder,validateFields, tableOrderController.createOrder);//http://localhost:3800/api/table
router.put("/:id",tableOrderValidator.validateOrder,validateFields, tableOrderController.updateOrder);//http://localhost:3800/api/table/1
router.delete("/:id", tableOrderController.deleteOrder);//http://localhost:3800/api/order/1
export default router;