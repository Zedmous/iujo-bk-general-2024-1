import { body } from "express-validator";

class PurchaseOrderValidator {
  public validateOrder = [
    body("id").notEmpty().withMessage("Order Id is required"),
    body("supplier_id").notEmpty().withMessage("Supplier id is required"),
    body("supplier_id").isNumeric().withMessage("Supplier id must be numeric"),
  ];
}
export { PurchaseOrderValidator };