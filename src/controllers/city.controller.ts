import { Request, Response } from "express";
import { create, deleted, getAll, getOne, update } from "../services/city.service";
export class CityController {
 
    constructor() {}
  
    all = async (req: Request, res: Response) => {
      const { status, message, data } = await getAll();
      return res.status(status).json({
        message,
        data,
      });
    };
  
    one = async (req: Request, res: Response) => {
      const {id}=req.params
      const { status, message, data } = await getOne(parseInt(id) as number);
      return res.status(status).json({
        message,
        data,
      });
    };
    createCity = async (req: Request, res: Response) => {
      const { status, message, data } = await create(req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
    updateCity = async (req: Request, res: Response) => {
      const {id}=req.params
      const { status, message, data } = await update(parseInt(id) as number,req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
  
    deleteCity = async (req: Request, res: Response) => {
      const {id}=req.params
      const { status, message, data } = await deleted(parseInt(id) as number,req.body);
      return res.status(status).json({
        message,
        data,
      });
    };
    
  }