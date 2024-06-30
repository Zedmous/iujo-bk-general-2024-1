import { Router } from "express";
import { validateFields } from "../middlewares";
import { supplierController } from "../controllers";
import { supplierValidator } from "../validators";
const SupplierValidator = new supplierValidator();
const router = Router();
const SupplierController = new supplierController();
router.get("/", SupplierController.all)
router.get("/:id", SupplierController.one);
router.post("/",SupplierValidator.validateSupplier,validateFields, SupplierController.createSupplier);
router.put("/:id",SupplierValidator.validateSupplier,validateFields, SupplierController.updateSupplier);
router.delete("/:id", SupplierController.deleteSupplier);
export default router;