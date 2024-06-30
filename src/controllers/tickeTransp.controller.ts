import { Request, Response } from "express";
import { create, deleted, getAll, getOne, update } from '../services/tickets_transport';

export class ticketController {
    constructor() {}
  
    all = async (req: Request, res: Response) => {
      const { status, message, data } = await getAll();
      return res.status(status).json({
        message,
        data,
      });
    };
  
    one = async (req: Request, res: Response) => {
      const {idboleto}=req.params
      const { status, message, data } = await getOne(parseInt(idboleto) as number);
      return res.status(status).json({
        message,
        data,
      });
    };
    createTicket = async (req: Request, res: Response) => {
      const { status, message, data } = await create(req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
    updateTicket = async (req: Request, res: Response) => {
      const {idboleto}=req.params
      const { status, message, data } = await update(parseInt(idboleto) as number,req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
  
    deleteTicket = async (req: Request, res: Response) => {
      const {idboleto}=req.params
      const { status, message, data } = await deleted(parseInt(idboleto) as number,req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
    
  }