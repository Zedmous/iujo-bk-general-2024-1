import { Router } from "express";
import { validateFields } from "../middlewares";
import { TestController } from "../controllers";
import { TestValidator } from "../validators";
const testValidator = new TestValidator();
const router = Router();
const testController=new TestController();
router.get("/", testController.getTest);//http://localhost:3880/api/tests
router.post("/",testValidator.validateTest,validateFields, testController.postTest);
router.put("/:id",testValidator.validateTest,validateFields, testController.postTest);
router.delete("/:id", testController.postTest);
export default router;