import { body } from "express-validator";

class CustomerValidator {
  public validateCustomer = [
    body("business_name").notEmpty().withMessage("Business name is required"),
    body("business_name").isString().withMessage("Business name must be string"),
    body("email").isEmail().withMessage("Debe proporcionar una dirección de correo electrónico válida"),
    body("email").notEmpty().withMessage("El campo de correo electrónico no puede estar vacío"),
    body("date").isDate().withMessage("Debe proporcionar una fecha válida"),
    body("date").notEmpty().withMessage("El campo de fecha no puede estar vacío"),
    body("city_id").isNumeric().withMessage("City ID must be numeric"),
    body("address").isString().withMessage("Address must be numeric"),
    body("language_id").isNumeric().withMessage("Language ID must be numeric"),
    body("sa_id").isNumeric().withMessage("SA ID must be numeric"),
    body("user_id").isNumeric().withMessage("SA ID must be numeric"),
  ];
}
export { CustomerValidator };
