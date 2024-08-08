import { body } from "express-validator";
import { OrderProductDetailInterface } from "../interfaces";

class OrderValidator {
  public validateOrder = [
    // body("id").notEmpty().withMessage("Order Id is required"),
    body("supplier_id").notEmpty().withMessage("Supplier id is required"),
    body("supplier_id").isNumeric().withMessage("Supplier id must be numeric"),
    body('order_details').isArray().withMessage('Order details must be an array').custom((details) => {
      details.forEach((detail:OrderProductDetailInterface) => {
        if (!detail.product_id) {
          throw new Error('Product id is required');
        }
        if (!detail.price) {
          throw new Error('Price is required');
        }
        if (!detail.amount) {
          throw new Error('Amount is required');
        }
        if (!detail.description) {
          throw new Error('Description is required');
        }
      });
      return true;
    }),
  ];
}
export { OrderValidator };