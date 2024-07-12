import { body } from "express-validator";

class RequirementsValidator {
  public validateRequirements = [
    body("name").notEmpty().withMessage("Requirement is required"),
    body("name").isString().withMessage("Requirement must be string"),
  ];
}
export { RequirementsValidator };