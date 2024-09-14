import { body } from "express-validator";
import { NextFunction, Request, Response } from "express";
import { findRoleByName, getOneRole } from "../services/transport_exit.services";

class TransportExitValidator {
    public validatetiptransp = [
      body("name").notEmpty().withMessage("transpexit Name is required"),
      body("name").isString().withMessage("transpexit Name must be string"),
      body("origin").notEmpty().withMessage("Origin Name is required"),
      body("origin").isString().withMessage("Origin Name must be string"),
      body("destination").notEmpty().withMessage("Origin Name is required"),
      body("destination").isString().withMessage("Origin Name must be string"),
      body("date").notEmpty().withMessage("Date Name is required"),
      body("date").isDate().withMessage("Date Name must be date"),
      body("id").notEmpty().withMessage("ID Name is required"),
      body("id").isNumeric().withMessage("Id Name must be numeric"),
      body("idboleto").notEmpty().withMessage("Idboleto Name is required"),
      body("idboleto").isNumeric().withMessage("Idboleto Name must be numeric"),
      body("id_responsable").notEmpty().withMessage("Id_responsable Name is required"),
      body("id_responsable").isNumeric().withMessage("Id_responsable Name must be numeric"),
    
    ];
    verifyId = (req: Request, res: Response, next: NextFunction) => {
      next();
    };
    public validateIfIdExist = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const { idExit } = req.params;
      const { status, message, data } = await getOneRole(idExit);
      if (status == 500) {
        return res.status(status).json({
          message,
        });
      } else if (status == 404) {
        if (idExit) {
          return res.status(404).json({
            errors: [
              {
                type: "field",
                msg: `El parametro id : ${idExit}, no existe en la base de datos.`,
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
      const { idExit } = req.params;
      let { name } = req.body;
      const { status, message, data } = await findRoleByName(name);
      if (status == 500) {
        return res.status(status).json({
          message,
        });
      } else if (status == 200) {
        const role: any = data?.role;
        if (idExit) {
          //caso si es para actualizar datos
          if (idExit != role.id) {
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
  export { TransportExitValidator };