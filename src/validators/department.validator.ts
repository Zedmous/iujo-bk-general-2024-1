import { body, param } from "express-validator";

class DepartmentValidator {
  public validatedepartment = [
    body("name").notEmpty().withMessage("Department Name is required"),
    body("name").isString().withMessage("Department Name must be string"),

  ];
}
export {DepartmentValidator};