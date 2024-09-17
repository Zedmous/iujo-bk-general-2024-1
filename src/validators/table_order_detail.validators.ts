import { body } from "express-validator";

class TableOrderDetailValidator {
  public validateOrderDetail = [
    // Assuming "type_table_name" is the property you want to validate:
    body("order_id").notEmpty().withMessage("Order id is required"),
    body("order_id").isNumeric().withMessage("Order id must be numeric"),
    body("dish_id").notEmpty().withMessage("Dish id for order is required"),
    body("dish_id").isNumeric().withMessage("Dish id must be selected with a number id"),
    body("quantity").notEmpty().withMessage("Quantity status is required"),
    body("quantity").isNumeric().withMessage("Quantity status must be numeric"),

  ];
}

export { TableOrderDetailValidator };
