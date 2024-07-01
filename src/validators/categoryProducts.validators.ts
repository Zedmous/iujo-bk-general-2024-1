import { body } from "express-validator";

class categoryProductsValidator {
  public validateCategoryProducts = [
    body("name").isString().withMessage("Category Name must be string"),
  ];
}
export { categoryProductsValidator };