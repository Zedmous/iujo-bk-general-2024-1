import { body, param } from "express-validator";

class conceptvalidator {
  public validaconcept = [
    body("concept-nombrededucciones").notEmpty().withMessage("Name is required"),
    body("concept-nombrededucciones").isString().withMessage("Name must be string"),
    body("value-assignment").notEmpty().withMessage("value assignment is required"),
    body("value-assignment").isFloat().withMessage("value assignment must be float"),
    body("tipe-concept").notEmpty().withMessage("The tipe-concept is required"),
    body("tipe-concept").isString().withMessage("The tipe-concept must be string."),
  ];
}
export {conceptvalidator};