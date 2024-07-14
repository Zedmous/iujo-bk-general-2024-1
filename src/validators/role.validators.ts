import { body } from "express-validator";

class RoleValidator {
  public validateRole = [
    body("name").notEmpty().withMessage("Role Name is required"),
    body("name").isString().withMessage("Role Name must be string"),
  ];
}
export { RoleValidator };