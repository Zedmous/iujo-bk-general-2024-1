import { Router } from "express";
import { validateFields } from "../middlewares";
import { TableOrderDetailController } from "../controllers";
import { TableOrderDetailValidator } from "../validators";
const tableOrderDetailValidator = new TableOrderDetailValidator();
const router = Router();
const tableOrderDetailController=new TableOrderDetailController();
router.get("/", tableOrderDetailController.all);//http://localhost:3800/api/order_detail
router.get("/:id", tableOrderDetailController.one);//http://localhost:3800/api/order_detail/1
router.post("/",tableOrderDetailValidator.validateOrderDetail,validateFields, tableOrderDetailController.createOrderDetail);//http://localhost:3800/api/order_detail
router.put("/:id",tableOrderDetailValidator.validateOrderDetail,validateFields, tableOrderDetailController.updateOrderDetail);//http://localhost:3800/api/order_detail/1
router.delete("/:id", tableOrderDetailController.deleteOrderDetail);//http://localhost:3800/api/order_detail/1
export default router;