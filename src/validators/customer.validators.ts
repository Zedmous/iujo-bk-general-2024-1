import { body } from "express-validator";
import { Customer } from "../config";

class CustomerValidator {
  public validateCustomer = [
    body("razons").notEmpty().withMessage("Role Name is required"),
    body("razons").isString().withMessage("Role Name must be string"),
    body("email").isEmail().withMessage("Debe proporcionar una dirección de correo electrónico válida"),
    body("email").notEmpty().withMessage("El campo de correo electrónico no puede estar vacío"),
    body("date").isDate().withMessage("Debe proporcionar una fecha válida"),
    body("date").notEmpty().withMessage("El campo de fecha no puede estar vacío"),
    
    
  ];
}
export { CustomerValidator };