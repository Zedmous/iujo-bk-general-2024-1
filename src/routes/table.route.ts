import { Router } from "express";
import { validateFields } from "../middlewares";
import { TableController } from "../controllers";
import { TableValidator } from "../validators";
const tableValidator = new TableValidator();
const router = Router();
const tableController=new TableController();
router.get("/", tableController.all);//http://localhost:3800/api/table
router.get("/:id", tableController.one);//http://localhost:3800/api/roles/1
router.post("/",tableValidator.validateTable,validateFields, tableController.createTable);//http://localhost:3800/api/roles
router.put("/:id",tableValidator.validateTable,validateFields, tableController.updateTable);//http://localhost:3800/api/roles/1
router.delete("/:id", tableController.deleteTable);//http://localhost:3800/api/roles/1
export default router;