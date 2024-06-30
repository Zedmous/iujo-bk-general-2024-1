import { Router } from "express";
import { validateFields } from "../middlewares";

import { SchedulesController } from "../controllers";
import { SchedulesValidator } from "../validators";



const schedulesValidator = new SchedulesValidator();
const router = Router();
const schedulesController = new SchedulesController();


router.get("/", schedulesController.all); //http://localhost:3308/api/schedules
router.get("/:id", schedulesController.one);//http://localhost:3308/api/schedules/1
router.post("/", schedulesValidator.validateSchedules,validateFields, schedulesController.createSchedules);//http://localhost:3308/api/schedules
router.put("/:id",schedulesValidator.validateSchedules,validateFields, schedulesController.updateSchedules);//http://localhost:3308/api/schedules/1
router.delete("/:id", schedulesController.deleteSchedules);//http://localhost:3308/api/schedules/1

export default router;