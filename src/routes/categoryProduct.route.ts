import { Router } from "express";
import { validateFields } from "../middlewares";
import { categoryProductController } from "../controllers";
import { categoryProductValidator } from "../validators";

const CategoryProductValidator = new categoryProductValidator();
const router = Router();
const CategoryProductController=new categoryProductController();
router.get("/", CategoryProductController.all);//http://localhost:3800/api/categoryproducts
router.get("/:id", CategoryProductController.one);//http://localhost:3800/api/categoryproducts/1
router.post("/",CategoryProductValidator.validateCategoryProduct,validateFields, CategoryProductController.createCategoryProduct);//http://localhost:3800/api/categoryProducts
router.put("/:id",CategoryProductValidator.validateCategoryProduct,validateFields, CategoryProductController.updateCategoryProduct);//http://localhost:3800/api/categoryProducts/1
router.delete("/:id", CategoryProductController.deleteCategoryProduct);//http://localhost:3800/api/categoryproducts/1
export default router;