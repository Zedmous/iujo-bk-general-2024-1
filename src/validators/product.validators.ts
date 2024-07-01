import { body } from "express-validator";

class ProductValidator {
  public validateProduct = [
    body("name").notEmpty().withMessage("Product Name is required"),
    body("name").isString().withMessage("Product Name must be string"),

    body("categoryProduct").notEmpty().withMessage("Category is required"),

    body("salePrice").notEmpty().withMessage("Sale price is required"),
    body("salePrice").isDecimal().withMessage("Sale price must be a number"),

    body("productCost").notEmpty().withMessage("productCost is required"),
    body("productCost").isDecimal().withMessage("productCost must be a number"),
  ];
}
export { ProductValidator };