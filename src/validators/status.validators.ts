import { body } from "express-validator";

class StatusValidator {
    public validateStatus = [
        body("attraction_status").notEmpty().withMessage("The attraction status is required"),
        body("attraction_status").isString().withMessage("The attracction status must be string"),
    ];
}
export { StatusValidator };