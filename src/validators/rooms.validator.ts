import { body } from "express-validator";

class RoomsValidator {
  public validateRoom = [
    body("name").notEmpty().withMessage("Room Name is required"),
    body("name").isString().withMessage("Romm Name must be string"),
  ];
}
export { RoomsValidator };