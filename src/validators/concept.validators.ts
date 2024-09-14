import { body, param } from "express-validator";

class ConceptValidator {
  public validateconcept = [
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name must be string"),
    body("type").notEmpty().withMessage("The type is required"),
    body("type").isString().withMessage("The type must be string."),
  ];
}
export { ConceptValidator };
