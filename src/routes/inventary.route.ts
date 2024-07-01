import { Router } from "express";
import { validateFields } from "../middlewares";
import { inventaryController } from "../controllers";
import { inventaryValidator } from "../validators";

const inventaryControllerValidator = new inventaryValidator();
const router = Router();
const InventaryController=new inventaryController();
router.get("/", InventaryController.all);//http://localhost:3800/api/categoryproducts
router.get("/:id", InventaryController.one);//http://localhost:3800/api/categoryproducts/1
router.post("/",inventaryControllerValidator.validateInventary,validateFields, InventaryController.createInventary);//http://localhost:3800/api/categoryProducts
router.put("/:id",inventaryControllerValidator.validateInventary,validateFields, InventaryController.updateInventary);//http://localhost:3800/api/categoryProducts/1
router.delete("/:id", InventaryController.deleteInventary);//http://localhost:3800/api/categoryproducts/1
export default router;