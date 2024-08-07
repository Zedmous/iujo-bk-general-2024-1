import { body } from "express-validator";

class StateValidator {
  public validateState = [
    body("name").notEmpty().withMessage("State name is required"),
    body("name").isString().withMessage("State name must be string"),
  ];
}
export { StateValidator };
