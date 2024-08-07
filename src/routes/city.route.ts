import { Router } from "express";
const router = Router();
import { validateFields } from "../middlewares";
import { CityController } from "../controllers";
import { CityValidator } from "../validators";

const cityValidator = new CityValidator();
const cityController = new CityController();
router.get("/", cityController.all)
router.get("/:id", cityController.one);
router.post("/",cityValidator.validateCity,validateFields, cityController.createCity);
router.put("/:id",cityValidator.validateCity,validateFields, cityController.updateCity);
router.delete("/:id", cityController.deleteCity);/**/
export default router;