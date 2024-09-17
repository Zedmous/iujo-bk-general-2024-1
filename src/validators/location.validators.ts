import { body } from "express-validator";
import { NextFunction, Request, Response } from "express";
import { findlocationsByName, getOne } from "../services/location.service";

class LocationValidator {
  public validateLocation= [
    body("name").notEmpty().withMessage("Locations Name is required"),
    body("name").isString().withMessage("Locations Name must be string"),
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
    const { id } = req.params;
    const { status, message, data } = await getOne(id);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 404) {
      if (id) {
        return res.status(404).json({
          errors: [
            {
              type: "field",
              msg: `El parametro id : ${id}, no existe en la base de datos.`,
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
    const { id } = req.params;
    let { name } = req.body;
    let { latitude } = req.body;
    let { longitude } = req.body;
    const { status, message, data } = await findlocationsByName(name, latitude, longitude);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const location: any = data?.locations;
      if (id) {
        //caso si es para actualizar datos
        if (id != location.id) {
          return res.status(400).json({
            errors: [
              {
                type: "field",
                msg: `Nombre en uso : ${name}, ${latitude} y ${longitude}, para el registro actual`,
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
              msg: `Nombre en uso : ${name}, ${latitude} y ${longitude} , para el nuevo rol`,
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
export { LocationValidator };