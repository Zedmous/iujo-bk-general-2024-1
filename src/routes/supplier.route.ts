import { Router } from "express";
const router = Router();

import { validateFields } from "../middlewares";
import { SupplierController } from "../controllers";
import { SupplierValidator } from "../validators";

const supplierValidator = new SupplierValidator();
const supplierController = new SupplierController();
router.get("/", supplierController.all)
router.get("/:id", supplierController.one);


router.post(
    "/",
    supplierValidator.validateSupplier,
    supplierValidator.validateIfNameIsUse,
    validateFields,
    supplierController.createSupplier
  );



router.put(
    "/:id",
    supplierValidator.validateSupplier,
    supplierValidator.validateIfIdExist,
    supplierValidator.validateIfNameIsUse,
    validateFields,
    supplierController.updateSupplier
  );



router.delete("/:id", supplierController.deleteSupplier);/**/
export default router;