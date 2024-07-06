import { body, param } from "express-validator";

class ConceptValidator {
  public validateconcept = [
    body("name").notEmpty().withMessage("Concept Name is required"),
    body("name").isString().withMessage("Concept Name must be string"),
    body("tipe-concept").notEmpty().withMessage("The tipe-concept is required"),
    body("tipe-concept").isString().withMessage("The tipe-concept must be string."),
  ];
}
export {ConceptValidator};