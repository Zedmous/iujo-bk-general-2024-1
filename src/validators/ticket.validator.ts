import { body } from "express-validator";

class ticketValidator {
  public validateRole = [
    body("boleto").notEmpty().withMessage("Role Boleto is required"),
    body("boleto").isString().withMessage("Role Boleto must be string"),
  ];
}
export { ticketValidator };