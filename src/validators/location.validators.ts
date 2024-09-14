import { body } from "express-validator";

class LocationValidator {
  public validateLocation= [
    body("name").notEmpty().withMessage("Locations Name is required"),
    body("name").isString().withMessage("Locations Name must be string"),
  ];
}
export { LocationValidator };