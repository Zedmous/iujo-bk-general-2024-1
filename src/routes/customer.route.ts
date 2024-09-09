import { Router } from "express";
import { validateFields } from "../middlewares";
import { CustomerController } from "../controllers";
import { CustomerValidator } from "../validators";
const customerValidator = new CustomerValidator();
const router = Router();
const customerController=new CustomerController();
router.get("/", customerController.all);//http://localhost:3800/api/customer
router.get("/:id", customerController.one);//http://localhost:3800/api/customer/1
router.post("/",customerValidator.validateCustomer,validateFields, customerController.createCustomer);//http://localhost:3800/api/customer
router.put("/:id",customerValidator.validateCustomer,validateFields, customerController.updateCustomer);//http://localhost:3800/api/customer/1
router.delete("/:id", customerController.deleteCustomer);//http://localhost:3800/api/customer/1
export default router;