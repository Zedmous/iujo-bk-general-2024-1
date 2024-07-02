import { Request, Response } from "express";
import { getAll, getOne, create, update, deleted } from "../services/account.service";

export class AccountController
{
    constructor() {}    // Here End Constructor

    all = async (req: Request, res: Response) => 
    {
        const { status, message, data } = await getAll();
        return res.status(status).json({
            message,
            data,
        });
    };  // Here End All

    one = async (req: Request, res: Response) => 
    {
        const {id}=req.params
        const { status, message, data } = await getOne(parseInt(id) as number);
        return res.status(status).json({
            message,
            data,
        });
    };  // Here End One

    createAccount = async (req: Request, res: Response) => 
    {
        const { status, message, data } = await create(req.body);
        return res.status(status).json({
            message,
            data,
        });
    };  // Here End Create

    updateAccount = async (req: Request, res: Response) => 
    {
        const {id}=req.params
        const { status, message, data } = await update(parseInt(id) as number,req.body);
        return res.status(status).json({
            message,
            data,
        });
    };  // Here End Update

    deleteAccount = async (req: Request, res: Response) => 
    {
        const {id}=req.params
        const { status, message, data } = await deleted(parseInt(id) as number);
        return res.status(status).json({
            message,
            data,
        });
    };  // Here End Delete
}