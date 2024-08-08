import { Router } from "express";
import { validateFields } from "../middlewares";
import { ProductCategoryController } from "../controllers";
import { ProductCategoryValidator } from "../validators";

const router = Router();
const categoryProductsValidator = new ProductCategoryValidator();
const categoryProductsController = new ProductCategoryController();
router.get("/", categoryProductsController.all); //http://localhost:3800/api/orders
router.get("/:id", categoryProductsController.one); //http://localhost:3800/api/orders/1
router.post(
  "/",
  categoryProductsValidator.validateCategoryProducts,
  validateFields,
  categoryProductsController.createCategoryProducts
); //http://localhost:3800/api/orders
router.put(
  "/:id",
  categoryProductsValidator.validateCategoryProducts,
  validateFields,
  categoryProductsController.updateCategoryProducts
); //http://localhost:3800/api/orders/1
router.delete("/:id", categoryProductsController.deleteCategoryProducts); //http://localhost:3800/api/orders/1
export default router;
