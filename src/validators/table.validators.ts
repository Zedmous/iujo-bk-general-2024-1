import { body } from "express-validator";

class TableValidator {
  public validateTable = [
    body("number_table").notEmpty().withMessage("Table Number is required"),
    body("number_table").isNumeric().withMessage("Table Number must be number"),
  ];
}
export { TableValidator };