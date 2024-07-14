import { body } from "express-validator";

class LocationsValidator {
  public validateLocations = [
    body("name").notEmpty().withMessage("Locations Name is required"),
    body("name").isString().withMessage("Locations Name must be string"),
  ];
}
export { LocationsValidator };