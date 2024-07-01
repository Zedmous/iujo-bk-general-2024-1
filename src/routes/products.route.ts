import { Router } from "express";
import { validateFields } from "../middlewares";
import { ProductsController } from "../controllers";
import { ProductsValidator } from "../validators";

const productsValidator = new ProductsValidator();
const router = Router();
const productsController=new ProductsController();
router.get("/", productsController.all);//http://localhost:3800/api/products
router.get("/:id", productsController.one);//http://localhost:3800/api/products/1
router.post("/",productsValidator.validateProducts,validateFields, productsController.createProducts);//http://localhost:3800/api/products
router.put("/:id",productsValidator.validateProducts,validateFields, productsController.updateProducts);//http://localhost:3800/api/products/1
router.delete("/:id", productsController.deleteProducts);//http://localhost:3800/api/products/1
export default router;