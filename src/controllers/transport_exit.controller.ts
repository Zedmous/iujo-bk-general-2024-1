import { Request, Response } from "express";
import { create, deleted, getAll, getOneRole, reportToExcelRoles,update } from '../services/transport_exit.services';

export class TransportExitController {
    constructor() {}
  
    all = async (req: Request, res: Response) => {
      const { status, message, data } = await getAll();
      return res.status(status).json({
        message,
        data,
      });
    };
  
    one = async (req: Request, res: Response) => {
      const {idExit}=req.params
      const { status, message, data } = await getOneRole(parseInt(idExit) as number);
      return res.status(status).json({
        message,
        data,
      });
    };
    createTransportexit = async (req: Request, res: Response) => {
      const { status, message, data } = await create(req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
    updateTransportexit = async (req: Request, res: Response) => {
      const {idExit}=req.params
      const { status, message, data } = await update(parseInt(idExit) as number,req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
  
    deleteTransportexit = async (req: Request, res: Response) => {
      const {idExit}=req.params
      const { status, message, data } = await deleted(parseInt(idExit) as number,req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
    reportExcel = async (req: Request, res: Response) => {
      const { status, message, data } = await reportToExcelRoles();
      return res.status(status).json({
        message,
        data,
      });
    };
  }