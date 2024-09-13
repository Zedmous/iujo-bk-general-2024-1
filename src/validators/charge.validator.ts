import { body, param } from "express-validator";

class ChargeValidator {
  public validatecharge = [
    body("name").notEmpty().withMessage("Charge Name is required"),
    body("name").isString().withMessage("Charge Name must be string"),

  ];
}
export {ChargeValidator};