import { body } from "express-validator";

class ProductValidator {
  public validateProduct = [
    body("name").notEmpty().withMessage("Product Name is required"),
    body("name").isString().withMessage("Product Name must be string"),
    body("product_category_id").notEmpty().withMessage("Product Category id is required"),
    body("product_category_id").isNumeric().withMessage("Product Category id must be numeric"),
    body("price").notEmpty().withMessage("Sale price is required"),
    body("price").isDecimal().withMessage("Sale price must be a number"),
    body("cost").notEmpty().withMessage("Cost is required"),
    body("cost").isDecimal().withMessage("Cost must be a number"),
  ];
}
export { ProductValidator };