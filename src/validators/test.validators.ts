import { body } from "express-validator";

class TestValidator {
  public validateTest = [
    body("test_name").notEmpty().withMessage("Test Name is required"),
    body("test_name").isString().withMessage("Test Name must be string"),
    body("test_age").notEmpty().withMessage("Test Age is required"),
    body("test_age").isNumeric().withMessage("Test Age must be numeric"),
    body("status").notEmpty().withMessage("Test Status is required"),
    body("status").isBoolean().withMessage("The status must be boolean."),
  ];
}
export { TestValidator };
