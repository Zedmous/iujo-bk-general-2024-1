import { body } from "express-validator";

class ProductsValidator {
  public validateProducts = [
    body("name").notEmpty().withMessage("Products Name is required"),
    body("name").isString().withMessage("Products Name must be string"),

    body("code_category").notEmpty().withMessage("Category is required"),

  ];
}
export { ProductsValidator };