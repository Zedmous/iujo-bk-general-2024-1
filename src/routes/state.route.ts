import { Router } from "express";
const router = Router();

import { validateFields } from "../middlewares";
import { StateController } from "../controllers";
import { StateValidator } from "../validators";

const stateValidator = new StateValidator();
const stateController = new StateController();
router.get("/", stateController.all)
router.get("/:id", stateController.one);
router.post("/",stateValidator.validateState,validateFields, stateController.createState);
router.put("/:id",stateValidator.validateState,validateFields, stateController.updateState);
router.delete("/:id", stateController.deleteState);/**/
export default router;