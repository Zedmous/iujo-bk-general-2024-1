import { Router } from "express";
const router = Router();

import { validateFields } from "../middlewares";
import { SupplierController } from "../controllers";
import { SupplierValidator } from "../validators";

const supplierValidator = new SupplierValidator();
const supplierController = new SupplierController();
router.get("/", supplierController.all)
router.get("/:id", supplierController.one);
router.post("/",supplierValidator.validateSupplier,validateFields, supplierController.createSupplier);
router.put("/:id",supplierValidator.validateSupplier,validateFields, supplierController.updateSupplier);
router.delete("/:id", supplierController.deleteSupplier);/**/
export default router;