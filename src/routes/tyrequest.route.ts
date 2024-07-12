import { Router } from "express";
import { TypeRequestController } from "../controllers";

const router = Router();

const typerequestcontroller = new TypeRequestController();

router.get("/", typerequestcontroller.all); 
router.get("/:id", typerequestcontroller.one); 
router.post("/", typerequestcontroller.createTypeRequest); 
router.put("/:id", typerequestcontroller.updateTypeRequest); 
router.delete("/:id", typerequestcontroller.deleteTypeRequest); 