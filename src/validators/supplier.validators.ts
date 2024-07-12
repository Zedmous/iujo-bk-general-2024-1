import { body } from "express-validator";

class supplierValidator {
  public validateSupplier = [
    body("code").notEmpty().withMessage("Code is required").trim().isInt().withMessage
    ('The code is a number').isLength({ min: 7, max: 15}).withMessage
    ('Code cant be less than 7 and must be more than 15'),
    
    body("city_id").notEmpty().withMessage("City ID is required").isInt().trim(),

    body("name").notEmpty().withMessage("Supplier name is required").isString().withMessage("Test Name must be string")
    .isLength({min:5,max:30}).withMessage("Name cant be less than 5 and must be more than 30"),

    body("telephone").notEmpty().withMessage("Telephone is required").isLength({ min: 7, max: 15}).withMessage
    ('Telephone cant be less than 7 and must be more than 15'),

    body("fiscal_address").notEmpty().withMessage("Fiscal Address is required").isLength({min: 5, max:30}).withMessage
    ("Fiscal Address cant be less than 5 and must be more than 30"),
    
    body("contributor").notEmpty().withMessage("Contributor is required").isInt(),

    body("status").isBoolean().withMessage("Status must be boolean."),

    body("deleteAt").isDate(),
  ];
}
export { supplierValidator };

