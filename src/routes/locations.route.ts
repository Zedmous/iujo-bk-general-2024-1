import { Router } from "express";
import { validateFields } from "../middlewares";
import { LocationController } from "../controllers";
import { LocationValidator } from "../validators";
const locationsValidator = new LocationValidator();
const router = Router();
const locationsController=new LocationController();
router.get("/", locationsController.all);//http://localhost:3800/api/locations
router.get("/:id", locationsController.one);//http://localhost:3800/api/locations/1
router.post("/",locationsValidator.validateLocation,validateFields, locationsController.createLocations);//http://localhost:3800/api/locations
router.put("/:id",locationsValidator.validateLocation,validateFields, locationsController.updateLocations);//http://localhost:3800/api/locations/1
router.delete("/:id", locationsController.deleteLocations);//http://localhost:3800/api/locations/1
export default router;