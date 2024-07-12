import { Request, Response } from "express";
import { getAll, getOne, create, update, deleted } from "../services/typerequest.service";

export class TypeRequestController
{
    constructor() {}    

    all = async (req: Request, res: Response) => 
    {
        const { status, message, data } = await getAll();
        return res.status(status).json({
            message,
            data,
        });
    }; 

    one = async (req: Request, res: Response) => 
    {
        const {id}=req.params
        const { status, message, data } = await getOne(parseInt(id) as number);
        return res.status(status).json({
            message,
            data,
        });
    };  

    createTypeRequest = async (req: Request, res: Response) => 
    {
        const { status, message, data } = await create(req.body);
        return res.status(status).json({
            message,
            data,
        });
    }; 

    updateTypeRequest = async (req: Request, res: Response) => 
    {
        const {id}=req.params
        const { status, message, data } = await update(parseInt(id) as number,req.body);
        return res.status(status).json({
            message,
            data,
        });
    }; 

    deleteTypeRequest = async (req: Request, res: Response) => 
    {
        const {id}=req.params
        const { status, message, data } = await deleted(parseInt(id) as number);
        return res.status(status).json({
            message,
            data,
        });
    };  
}