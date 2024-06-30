import { Router } from "express";
import { validateFields } from "../middlewares";
import { ticketController } from "../controllers";
import { ticketValidator } from "../validators";
const TicketValidator = new ticketValidator();
const router = Router();
const TicketController=new ticketController();
router.get("/", TicketController.all);//http://localhost:3800/api/roles
router.get("/:idboleto", TicketController.one);//http://localhost:3800/api/roles/1
router.post("/",TicketValidator.validateRole,validateFields, TicketController.createTicket);//http://localhost:3800/api/roles
router.put("/:idboleto",TicketValidator.validateRole,validateFields, TicketController.updateTicket);//http://localhost:3800/api/roles/1
router.delete("/:idboleto", TicketController.deleteTicket);//http://localhost:3800/api/roles/1
export default router;