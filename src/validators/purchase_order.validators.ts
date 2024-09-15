import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { getOne } from "../services/purchase_order.service";

class PurchaseOrderValidator {
  public validateOrder = [
    body("id").notEmpty().withMessage("Order Id is required"),
    body("supplier_id").notEmpty().withMessage("Supplier id is required"),
    body("supplier_id").isNumeric().withMessage("Supplier id must be numeric"),
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

  

}
export { PurchaseOrderValidator };