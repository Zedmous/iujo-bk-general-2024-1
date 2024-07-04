import { Router } from "express";
import { validateFields } from "../middlewares";
import { areaController } from "../controllers";
import { areaValidator } from "../validators";

const areaValidator = new areaValidator();
const router = Router();
const areaController=new areaController();
router.get("/", areaController.all);//http://localhost:3800/api/roles
router.get("/:id", areaController.one);//http://localhost:3800/api/roles/1
router.post("/",areaValidator.validateArea,validateFields, areaController.createAreas);//http://localhost:3800/api/roles
router.put("/:id",areaValidator.validateAreas,validateFields, areaController.updateAreas);//http://localhost:3800/api/roles/1
router.delete("/:id", areaController.deleteAreas);//http://localhost:3800/api/roles/1
export default router;