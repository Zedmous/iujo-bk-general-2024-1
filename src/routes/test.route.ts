import { Router } from "express";
import { TestController } from "../controllers/test.controller";
import TestValidator from "../validators/test.validators";
import { validateFields } from "../middlewares";
const testValidator = new TestValidator();
const router = Router();
const testController=new TestController();
router.get("/", testController.getTest);//http://localhost:3800/api/tests
router.post("/",testValidator.validateTest,validateFields, testController.postTest);
router.put("/:id",testValidator.validateTest,validateFields, testController.postTest);
router.delete("/:id", testController.postTest);
export default router;