import { body } from "express-validator";
import { NextFunction, Request, Response } from "express";
import { findSupplierByName, getOne } from "../services/supplier.service";

class SupplierValidator {
  public validateSupplier = [
    body("code").notEmpty().withMessage("Code is required"),
    body("code").isString().withMessage("Code must be string"),
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name must be string"),
    body("telephone").notEmpty().withMessage("Telephone is required"),
    body("telephone").isString().withMessage("Telephone is be string"),
    body("city_id").notEmpty().withMessage("City Id is required"),
    body("city_id").isNumeric().withMessage("City Id must be numeric"),
    body("fiscal_address").notEmpty().withMessage("Fiscal address is required"),
    body("fiscal_address").isString().withMessage("Fiscal address is be string"),
    body("contributor").isNumeric().withMessage("Contributor must be numeric"),
  ];

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
    const { status, message, data } = await findSupplierByName(name);
    if (status == 500) {
      return res.status(status).json({
        message,
      });
    } else if (status == 200) {
      const supplier: any = data?.supplier;
      if (id) {
        //caso si es para actualizar datos
        if (id != supplier.id) {
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
export { SupplierValidator };
