import { Request, Response } from "express";
import {
  getAllTTables,
  getOneTTable,
  createTTable,
  updateTTable,
  deleteTTable,
} from "../services/table_type.service"; // Import functions from TTables.service

export class TableTypeController {
  constructor() {}

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await getAllTTables(); // Use getAllTTables
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const { id } = req.params; // Extract ID from params
    const { status, message, data } = await getOneTTable(
      parseInt(id) as number
    ); // Use getOneTTable
    return res.status(status).json({
      message,
      data,
    });
  };

  createTTable = async (req: Request, res: Response) => {
    const { status, message, data } = await createTTable(req.body); // Use createTTable
    return res.status(status).json({
      message,
      data,
    });
  };

  updateTTable = async (req: Request, res: Response) => {
    const { id } = req.params; // Extract ID from params
    const { status, message, data } = await updateTTable(
      parseInt(id) as number,
      req.body
    ); // Use updateTTable
    return res.status(status).json({
      message,
      data,
    });
  };

  deleteTTable = async (req: Request, res: Response) => {
    const { id } = req.params; // Extract ID from params
    const { status, message, data } = await deleteTTable(
      parseInt(id) as number
    ); // Use deleteTTable
    return res.status(status).json({
      message,
      data,
    });
  };
}
