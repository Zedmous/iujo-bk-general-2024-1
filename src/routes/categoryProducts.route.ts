import { Router } from "express";
import { validateFields } from "../middlewares";
import { categoryProductsController } from "../controllers";
import { categoryProductsValidator } from "../validators";

const CategoryProductsValidator = new categoryProductsValidator();
const router = Router();
const CategoryProductsController=new categoryProductsController();
router.get("/", CategoryProductsController.all);//http://localhost:3800/api/categoryproducts
router.get("/:id", CategoryProductsController.one);//http://localhost:3800/api/categoryproducts/1
router.post("/",CategoryProductsValidator.validateCategoryProducts,validateFields, CategoryProductsController.createCategoryProducts);//http://localhost:3800/api/categoryProducts
router.put("/:id",CategoryProductsValidator.validateCategoryProducts,validateFields, CategoryProductsController.updateCategoryProducts);//http://localhost:3800/api/categoryProducts/1
router.delete("/:id", CategoryProductsController.deleteCategoryProducts);//http://localhost:3800/api/categoryproducts/1
export default router;