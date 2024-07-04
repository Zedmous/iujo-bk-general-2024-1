import { Router } from "express";
import { validateFields } from "../middlewares";
import { inventoryController } from "../controllers";
import { inventoryValidator } from "../validators";

const inventoryControllerValidator = new inventoryValidator();
const router = Router();
const InventoryController=new inventoryController();
router.get("/", InventoryController.all);
router.get("/:id", InventoryController.one);
router.post("/",inventoryControllerValidator.validateInventory,validateFields, InventoryController.createInventory);
router.put("/:id",inventoryControllerValidator.validateInventory,validateFields, InventoryController.updateInventory);
router.delete("/:id", InventoryController.deleteInventory);
export default router;