import { body } from "express-validator";

class TableOrderValidator {
  public validateOrder = [
    // Assuming "type_table_name" is the property you want to validate:
    body("customer_id").notEmpty().withMessage("Customer for order is required"),
    body("customer_id").isNumeric().withMessage("Customer must be numeric"),
    body("table_id").notEmpty().withMessage("Table for order is required"),
    body("table_id").isNumeric().withMessage("Table must be selected with a number id"),
    body("table_order_status_id").notEmpty().withMessage("Order status is required"),
    body("table_order_status_id").isNumeric().withMessage("Order status must be numeric"),

  ];
}

export { TableOrderValidator };
