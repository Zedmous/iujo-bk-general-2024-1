import { Request, Response } from "express";
import { create, deleted, getAll, getOneRole, update } from '../services/transport_manager.services';

export class TransportManagerController {
    constructor() {}
  
    all = async (req: Request, res: Response) => {
      const { status, message, data } = await getAll();
      return res.status(status).json({
        message,
        data,
      });
    };
  
    one = async (req: Request, res: Response) => {
      const {idResponsable}=req.params
      const { status, message, data } = await getOneRole(parseInt(idResponsable) as number);
      return res.status(status).json({
        message,
        data,
      });
    };
    createTransportmanager = async (req: Request, res: Response) => {
      const { status, message, data } = await create(req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
    updateTransportmanager = async (req: Request, res: Response) => {
      const {idResponsable}=req.params
      const { status, message, data } = await update(parseInt(idResponsable) as number,req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
  
    deleteTransportmanager = async (req: Request, res: Response) => {
      const {idResponsable}=req.params
      const { status, message, data } = await deleted(parseInt(idResponsable) as number,req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
    
  }