import { body } from "express-validator";

class categoryProductValidator {
  public validateCategoryProduct = [
    body("name").isString().withMessage("Category Name must be string"),
  ];
}
export { categoryProductValidator };