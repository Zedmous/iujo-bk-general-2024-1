import { Request, Response } from "express";
import { create, deleted, getAll, getOneRole, reportToExcelRoles, update } from "../services/role.service";
export class RoleController {
  constructor() {
    
  }

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await getAll();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await getOneRole(parseInt(id) as number);
    return res.status(status).json({
      message,
      data,
    });
  };
  createRole = async (req: Request, res: Response) => {
    const { status, message, data } = await create(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  updateRole = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await update(parseInt(id) as number,req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  deleteRole = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await deleted(parseInt(id) as number,req.body);
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
