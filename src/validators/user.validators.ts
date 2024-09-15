import { body } from "express-validator";

class UserValidator {
  public validateUser = [
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name must be string"),
    body("email").notEmpty().withMessage("Email is required"),
    body("email").isEmail().withMessage("Email must be email"),
    body("password").notEmpty().withMessage("Passowrd is required"),
    body("password").isString().withMessage("Passowrd must be string"),
    body("role_id").notEmpty().withMessage("Role id is required"),
    body("role_id").isNumeric().withMessage("Role Id must be numeric"),
  ];
  public validateLogin = [
    body("email").notEmpty().withMessage("Email is required"),
    body("email").isEmail().withMessage("Email must be email"),
    body("password").notEmpty().withMessage("Passowrd is required"),
    body("password").isString().withMessage("Passowrd must be string"),
  ];
}
export { UserValidator };