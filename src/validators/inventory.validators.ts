import { body } from "express-validator";

class InventoryValidator {
  public validateInventory = [
    body("name").notEmpty().withMessage("Inventary Name is required"),
    body("name").isString().withMessage("Inventary Name must be string"),
    body("stock_products").notEmpty().withMessage("Stock products is required"),
    body("stock_products").isDecimal().withMessage("Stock products must be a number"),
  ];
}
export { InventoryValidator };