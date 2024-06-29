import { body, param } from "express-validator";

class ConceptValidator {
  public validaconcept = [
    body("concept-name").notEmpty().withMessage("Name is required"),
    body("concept-name").isString().withMessage("Name must be string"),
    body("value-assignment").notEmpty().withMessage("value assignment is required"),
    body("value-assignment").isFloat().withMessage("value assignment must be float"),
    body("tipe-concept").notEmpty().withMessage("The tipe-concept is required"),
    body("tipe-concept").isString().withMessage("The tipe-concept must be string."),
  ];
}
export {ConceptValidator};