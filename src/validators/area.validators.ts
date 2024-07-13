import { body } from "express-validator";

class AreaValidator {
  public validateArea = [
    body("name").notEmpty().withMessage("Area Name is required"),
    body("name").isString().withMessage("Area Name must be string"),
    body("location_id").notEmpty().withMessage("location ID is required"),
    body("location_id").isNumeric().withMessage("location ID must be numeric"),
  ];
}
export { AreaValidator };