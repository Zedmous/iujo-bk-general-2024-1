import { Router } from "express";
import { validateFields } from "../middlewares";
import { LocationsController } from "../controllers";
import { LocationsValidator } from "../validators/locations.validators";
const locationsValidator = new LocationsValidator();
const router = Router();
const locationsController=new LocationsController();
router.get("/", locationsController.all);//http://localhost:3800/api/locations
router.get("/:id", locationsController.one);//http://localhost:3800/api/locations/1
router.post("/",locationsValidator.validateLocations,validateFields, locationsController.createLocations);//http://localhost:3800/api/locations
router.put("/:id",locationsValidator.validateLocations,validateFields, locationsController.updateLocations);//http://localhost:3800/api/locations/1
router.delete("/:id", locationsController.deleteLocations);//http://localhost:3800/api/locations/1
export default router;