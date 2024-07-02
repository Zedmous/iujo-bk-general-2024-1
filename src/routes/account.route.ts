import { Router } from "express";
import { AccountController } from "../controllers";

const router = Router();

const accountController = new AccountController();

router.get("/", accountController.all); // http://localhost:2000/api/accounts
router.get("/:id", accountController.one); // http://localhost:2000/api/accounts/1
router.post("/", accountController.createAccount); // http://localhost:2000/api/accounts
router.put("/:id", accountController.updateAccount); // http://localhost:2000/api/accounts/1
router.delete("/:id", accountController.deleteAccount); // http://localhost:2000/api/accounts/1

export default router;