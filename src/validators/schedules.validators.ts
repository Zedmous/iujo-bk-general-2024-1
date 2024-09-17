import { body } from "express-validator";
import { NextFunction, Request, Response } from "express";
import { getOne } from "../services/schedules.service";

class SchedulesValidator {
  public validateSchedules = [
    body("starting_time").notEmpty().withMessage("Time is required"),
    body("ending_time").notEmpty().withMessage("Time is required"),
    body("day").notEmpty().withMessage("Day is required"),
    body("day").isString().withMessage("Day must be string"),
    body("shift").notEmpty().withMessage("Shift is required"),
    body("shift").isString().withMessage("Shift must be string"),
  ];

  verifyId = (req: Request, res: Response, next: NextFunction) => {
    next();
  };

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
export { SchedulesValidator };