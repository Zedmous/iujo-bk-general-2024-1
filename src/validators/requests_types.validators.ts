import { body, param } from "express-validator";

class RequestsTypesValidators {
  public validateconcept = [
    body("description").notEmpty().withMessage("Description is required"),
    body("description")
      .isLength({ max: 256 })
      .withMessage("Description can only be 256 characters maximum"),
  ];
}
export { RequestsTypesValidators };
