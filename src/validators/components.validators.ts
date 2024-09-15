import { body } from "express-validator";

class ComponentsValidator {
  public validateComponents = [
    body("description").notEmpty().withMessage("description is required"),
    body("description").isString().withMessage("description must be string"),
    body("type").notEmpty().withMessage("type is required"),
  
    body("price").notEmpty().withMessage("price is required"),
    body("price").isNumeric().withMessage("price must be a number"),
    body("repayment").notEmpty().withMessage("repayment is required"),
    body("repayment").isNumeric().withMessage("repayment must be a number")
  ];
}
export { ComponentsValidator };