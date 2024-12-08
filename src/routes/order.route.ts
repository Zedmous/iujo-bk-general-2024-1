import { Router, NextFunction, Request, Response } from "express";
import { validateFields } from "../middlewares";
import { OrderController } from "../controllers";
import { OrderValidator } from "../validators";

const router = Router();
const ordersValidator = new OrderValidator();
const ordersController = new OrderController();
router.get("/", ordersController.allOrders); //http://localhost:3800/api/orders
router.get("/:id", ordersController.oneOrder); //http://localhost:3800/api/orders/1
router.post(
  "/",
  ordersValidator.validateOrder,
  validateFields,
  ordersController.createOrder
); //http://localhost:3800/api/orders/1
router.put(
  "/:id",
  ordersValidator.validateOrder,
  validateFields,
  ordersController.updateOrder
); //http://localhost:3800/api/orders/1
router.delete("/:id", ordersController.deleteOrder); //http://localhost:3800/api/orders/1
export default router;
