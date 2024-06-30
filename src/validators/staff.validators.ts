import { body } from "express-validator";

class StaffValidator {
  public validateStaff = [
    body("name").notEmpty().withMessage("Staff Name is required"),
    body("name").isString().withMessage("Staff Name must be string"),
    body("lastname").notEmpty().withMessage("Staff Last Name is required"),
    body("lastname").isString().withMessage("Staff Last Name must be String"),
    body("phone").notEmpty().withMessage("Phone Number is required"),
    body("phone").isNumeric().withMessage("Phone Number must be numeric"),
    body("borndate").notEmpty().withMessage("Born Date is required"),
    body("borndate").isDate().withMessage("Born Date must be a date"),
    body("email").notEmpty().withMessage("Email is required"),
    body("email").isString().withMessage("Email must be string"),
    body("address").notEmpty().withMessage("Address is required"),
    body("address").isString().withMessage("Address must be string"),
    body("personId").notEmpty().withMessage("personId is required"),
    body("personId").isNumeric().withMessage("personId must be numeric"),
  ];
}
export { StaffValidator };