import { body } from "express-validator";

class SchedulesValidator {
  public validateSchedules = [
    body("starting_time").notEmpty().withMessage("Time is required"),
    body("ending_time").notEmpty().withMessage("Time is required"),
    body("day").notEmpty().withMessage("Day is required"),
    body("day").isString().withMessage("Day must be string"),
    body("shift").notEmpty().withMessage("Shift is required"),
    body("shift").isString().withMessage("Shift must be string"),
  ];
}
export { SchedulesValidator };