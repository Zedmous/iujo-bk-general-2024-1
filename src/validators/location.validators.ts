import { body } from "express-validator";

class locationValidator {
  public validateLocation = [
    body("name").notEmpty().withMessage("Location Name is required"),
    body("name").isString().withMessage("Location Name must be string"),
  ];
}
export { locationValidator };