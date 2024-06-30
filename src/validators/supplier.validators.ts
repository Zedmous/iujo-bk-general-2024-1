import { body } from "express-validator";

class supplierValidator {
  public validateSupplier = [
    body("code").notEmpty().withMessage("Code is required"),
    body("name").isString().withMessage("Test Name must be string"),
    body("telephone").notEmpty().withMessage("Telephone is required"),
    body("status").notEmpty().withMessage("Test Status is required"),
    body("status").isBoolean().withMessage("The status must be boolean."),
  ];
}
export { supplierValidator };

