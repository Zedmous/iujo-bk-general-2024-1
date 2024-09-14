import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { findRoleByName, getOneRole } from "../services/transport_manager.services";

class TransportManagerValidator {
    public validatetranspmanager = [
      body("telefono").notEmpty().withMessage("transpmanager Name is required"),
      body("telefono").isString().withMessage("transpmanager Name must be string"),
      body("horas").notEmpty().withMessage("transpmanager horas is required"),
      body("horas").isString().withMessage("transpmanager horas must be string"),


    ];
    verifyId = (req: Request, res: Response, next: NextFunction) => {
      next();
    };
    public validateIfIdExist = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const { idResponsable } = req.params;
      const { status, message, data } = await getOneRole(idResponsable);
      if (status == 500) {
        return res.status(status).json({
          message,
        });
      } else if (status == 404) {
        if (idResponsable) {
          return res.status(404).json({
            errors: [
              {
                type: "field",
                msg: `El Responsable id : ${idResponsable}, no existe en la base de datos.`,
                path: "idResponsable",
                location: "param",
              },
            ],
          });
        }
      }
      next();
    };
    public validateIfNameIsUse = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const { idResponsable } = req.params;
      let { name } = req.body;
      const { status, message, data } = await findRoleByName(name);
      if (status == 500) {
        return res.status(status).json({
          message,
        });
      } else if (status == 200) {
        const role: any = data?.role;
        if (idResponsable) {
          //caso si es para actualizar datos
          if (idResponsable != role.id) {
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
  
  export { TransportManagerValidator };