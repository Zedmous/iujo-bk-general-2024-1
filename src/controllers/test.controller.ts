import { Request, Response } from "express";
import { test } from "../services/test.service";
export class TestController {
  constructor() {}
  getTest = async (req: Request, res: Response) => {
    const { status, message, data } = await test();
    return res.status(status).json({
      message,
      data,
    });
  };
  postTest = async (req: Request, res: Response) => {
    const { status, message, data } = await test();
    return res.status(status).json({
      message,
      data,
      body:req.body
    });
  };
}
