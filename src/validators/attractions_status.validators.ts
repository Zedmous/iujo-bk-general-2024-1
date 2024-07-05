import { body } from "express-validator";

class AttractionsStatusValidator {
    public validateStatus = [
        body("name").notEmpty().withMessage("The attraction status is required"),
        body("name").isString().withMessage("The attracction status must be string"),
    ];
}
export { AttractionsStatusValidator };