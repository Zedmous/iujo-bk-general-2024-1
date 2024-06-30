import { body } from "express-validator";

class tipTranspValidator {
    public validatetiptransp = [
      body("tipo_transporte").notEmpty().withMessage("tiptransp Name is required"),
      body("tipo_transporte").isString().withMessage("tiptransp Name must be string"),
    ];
  }
  export { tipTranspValidator };