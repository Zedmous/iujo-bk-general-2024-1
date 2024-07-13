import { Router } from "express";
import { validateFields } from "../middlewares"; // Assuming middleware for error handling
import { TTablesController } from "../controllers"; // Your controller for TTables
import { TTablesValidator } from "../validators"; // Your validator for TTables

const tTablesValidator = new TTablesValidator(); // Create a new validator instance
const router = Router();
const tTablesController = new TTablesController(); // Create a new controller instance

router.get("/", tTablesController.all); // Get all TTables (http://localhost:3800/api/table)
router.get("/:id", tTablesController.one); // Get one TTable by ID (http://localhost:3800/api/table/1)
router.post("/", tTablesValidator.validateTTable, validateFields, tTablesController.createTTable); // Create a TTable (http://localhost:3800/api/table)
router.put("/:id", tTablesValidator.validateTTable, validateFields, tTablesController.updateTTable); // Update a TTable by ID (http://localhost:3800/api/table/1)
router.delete("/:id", tTablesController.deleteTTable); // Delete a TTable by ID (http://localhost:3800/api/table/1)

export default router;
