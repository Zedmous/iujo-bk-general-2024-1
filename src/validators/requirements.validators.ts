import { body } from "express-validator";

class RequirementsValidator {
  public validateRequirements = [
    body("requirement").notEmpty().withMessage("Requirement is required"),
    body("requirement").isString().withMessage("Requirement must be string"),
  ];
}
export { RequirementsValidator };