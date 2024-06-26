import { Request, Response } from "express";
import { concept } from "../services/concept.service";
export class ConceptController {
  constructor() {}
  getconcept = async (req: Request, res: Response) => {
    const { status, message, data } = await concept();
    return res.status(status).json({
      message,
      data,
    });
  };
  posconcept = async (req: Request, res: Response) => {
    const { status, message, data } = await concept();
    return res.status(status).json({
      message,
      data,
      body:req.body
    });
  };
}

