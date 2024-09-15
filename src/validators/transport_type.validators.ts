import { body } from "express-validator";

class TransportTypeValidator {
    public validatetiptransp = [
      body("name").notEmpty().withMessage("The name of the type of transport is required"),
      body("name").isString().withMessage("The name of the type of transport must be string"),
    ];
  }
  export { TransportTypeValidator };