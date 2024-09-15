import { body } from "express-validator";

class SupplierValidator {
  public validateSupplier = [
    body("code").notEmpty().withMessage("Code is required"),
    body("code").isString().withMessage("Code must be string"),
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name must be string"),
    body("telephone").notEmpty().withMessage("Telephone is required"),
    body("telephone").isString().withMessage("Telephone is be string"),
    body("city_id").notEmpty().withMessage("City Id is required"),
    body("city_id").isNumeric().withMessage("City Id must be numeric"),
    body("fiscal_address").notEmpty().withMessage("Fiscal address is required"),
    body("fiscal_address").isString().withMessage("Fiscal address is be string"),
    body("contributor").isNumeric().withMessage("Contributor must be numeric"),
  ];
}
export { SupplierValidator };
