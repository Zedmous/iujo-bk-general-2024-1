import { body } from "express-validator";

class TypeTransportValidator {
    public validatetiptransp = [
      body("Name").notEmpty().withMessage("tiptransp Name is required"),
      body("Name").isString().withMessage("tiptransp Name must be string"),
    ];
  }
  export { TypeTransportValidator };