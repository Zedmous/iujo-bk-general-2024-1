import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { findRoleByName } from "../services/role.service";

class RoleValidator {
  public validateRole = [
    body("name").notEmpty().withMessage("Role Name is required"),
    body("name").isString().withMessage("Role Name must be string"),
  ];

  verifyId = (req: Request, res: Response, next: NextFunction) => {
    next();
  };
  public validateIfNameIsUse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    let { name } = req.body;
    const { status, message, data } = await findRoleByName(name);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const role: any = data?.role;
      if (id) {
        //caso si es para actualizar datos
        if (id != role.id) {
          return res.status(400).json({
            errors: [
              {
                type: "field",
                msg: `Nombre en uso : ${name}, para el registro actual`,
                path: "name",
                location: "body",
              },
            ],
          });
        }
      } else {
        //caso si es para registrar un nuevo rol
        return res.status(400).json({
          errors: [
            {
              type: "field",
              msg: `Nombre en uso : ${name}, para el nuevo rol`,
              path: "name",
              location: "body",
            },
          ],
        });
      }
    }
    next();
  };
}
export { RoleValidator };
