import { body } from "express-validator";

class areaValidator {
  public validateArea = [
    body("name").notEmpty().withMessage("Area Name is required"),
    body("name").isString().withMessage("Area Name must be string"),
  ];
}
export { areaValidator };