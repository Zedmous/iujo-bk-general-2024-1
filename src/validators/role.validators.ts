import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

class RoleValidator {
  public validateRole = [
    body("name").notEmpty().withMessage("Role Name is required"),
    body("name").isString().withMessage("Role Name must be string"),
  ];

  verifyId = (req: Request, res: Response, next: NextFunction) => {

  


    
    next();
  };
}
export { RoleValidator };
