import { Router } from "express";
import { validateFields } from "../middlewares";
import { UserController } from "../controllers";
import { UserValidator } from "../validators";
const userValidator = new UserValidator();
const router = Router();
const userController=new UserController();
router.get("/", userController.allUser);//http://localhost:3800/api/users
router.get("/:id", userController.oneUser);//http://localhost:3800/api/users/1
router.post("/",userValidator.validateUser,validateFields, userController.createUser);//http://localhost:3800/api/users
router.put("/:id",userValidator.validateUser,validateFields, userController.updateUser);//http://localhost:3800/api/users/1
router.delete("/:id", userController.deleteUser);//http://localhost:3800/api/users/1
router.post("/login",userValidator.validateLogin,validateFields, userController.loginUser);//http://localhost:3800/api/users

export default router;