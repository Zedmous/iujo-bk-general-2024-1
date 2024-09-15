import { body } from "express-validator";

class LocationValidator {
  public validateLocation= [
    body("name").notEmpty().withMessage("Locations Name is required"),
    body("name").isString().withMessage("Locations Name must be string"),
    body("latitude").notEmpty().withMessage("Latitude is required"),
    body("latitude").isNumeric().withMessage("Latitude must be a number"),
    body("longitude").notEmpty().withMessage("Longitude is required"),
    body("longitude").isNumeric().withMessage("Longitude must be a number")
  ];
}
export { LocationValidator };