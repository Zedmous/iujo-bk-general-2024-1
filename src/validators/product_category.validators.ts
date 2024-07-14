import { body } from "express-validator";

class ProductCategoryValidator {
  public validateCategoryProducts = [
    body("name").isString().withMessage("Category Name must be string"),
  ];
}
export { ProductCategoryValidator };