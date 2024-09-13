import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { findRoleByName, getOneRole } from "../services/tickets_transport";

class ticketValidator {
  public validateRole = [
    body("boleto").notEmpty().withMessage("Role Boleto is required"),
    body("boleto").isString().withMessage("Role Boleto must be string"),
  ];

  verifyId = (req: Request, res: Response, next: NextFunction) => {
    next();
  };
  //un middleware en el caso de campo unico
  public validateIfIdExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { idboleto } = req.params;
    const { status, message, data } = await getOneRole(idboleto);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 404) {
      if (idboleto) {
        return res.status(404).json({
          errors: [
            {
              type: "field",
              msg: `El Ticket : ${idboleto}, no existe en la base de datos.`,
              path: "id",
              location: "param",
            },
          ],
        });
      }
    }
    next();
  };
  //un middleware en el caso de campo unico
  public validateIfNameIsUse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { idboleto } = req.params;
    let { name } = req.body;
    const { status, message, data } = await findRoleByName(name);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const role: any = data?.role;
      if (idboleto) {
        //caso si es para actualizar datos
        if (idboleto != role.id) {
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
export { ticketValidator };