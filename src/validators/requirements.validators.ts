import { body } from "express-validator";

class RequirementsValidator {
  public validateRequirements = [
    body("name").notEmpty().withMessage("Requirement name is required"),
    body("name").isString().withMessage("Requirement name must be string"),
  ];
}
export { RequirementsValidator };