import { Router, NextFunction, Request, Response } from "express";
import { validateFields } from "../middlewares";
import { PurchaseOrderController } from "../controllers";
import { PurchaseOrderValidator } from "../validators";

const router = Router();
const purchaseOrdersValidator = new PurchaseOrderValidator();
const purchaseOrdersController = new PurchaseOrderController ();
router.get("/", purchaseOrdersController.allOrders); //http://localhost:3800/api/purchase_orders
router.get("/:id", purchaseOrdersController.oneOrder); //http://localhost:3800/api/purchase_orders/1
router.post(
  "/",
  purchaseOrdersValidator.validateOrder,
  validateFields,
  purchaseOrdersController.createOrder
); //http://localhost:3800/api/purchase_orders/1
router.put(
  "/:id",
  purchaseOrdersValidator.validateOrder,
  validateFields,
  purchaseOrdersController.updateOrder
); //http://localhost:3800/api/purchase_orders/1
router.delete("/:id", purchaseOrdersController.deleteOrder); //http://localhost:3800/api/purchase_orders/1
export default router;
