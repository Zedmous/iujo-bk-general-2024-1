import { body } from "express-validator";

class TableValidator {
  public validateTable = [
    body("name").notEmpty().withMessage("Table name is required"),
    body("name").isString().withMessage("Table name must be string"),
    body("location_id").notEmpty().withMessage("Location id is required"),
    body("location_id").isNumeric().withMessage("Location id must be numeric"),
    body("table_type_id").notEmpty().withMessage("Table type id is required"),
    body("table_type_id").isNumeric().withMessage("Table type id must be numeric"),
    body("capacitance").notEmpty().withMessage("Capacitance is required"),
    body("capacitance").isNumeric().withMessage("Capacitance must be numeric"),
  ];
}
export { TableValidator };