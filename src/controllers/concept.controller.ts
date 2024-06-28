import { Request, Response } from "express";
import { concept, ConceptService } from "../services/concept.service";
export class ConceptController {
  private conceptService: ConceptService;
  constructor() {
    this.conceptService = new ConceptService();
  }
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
  getConcepts = (req: Request, res: Response) => {
    const concepts = this.conceptService.getConcepts();
    return res.status(200).json(concepts);
  };

  getConceptById = (req: Request, res: Response) => {
    const { id } = req.params;
    const concept = this.conceptService.getConceptById(Number(id));
    if (concept) {
      return res.status(200).json(concept);
    } else {
      return res.status(404).json({ message: "Concepto no encontrado" });
    }
  };

  addConcept = (req: Request, res: Response) => {
    const { idconcetp, namedeductions, value_assignment, tipe_concept } = req.body;
    const newConcept = {
      idconcetp,
      namedeductions,
      value_assignment,
      tipe_concept
    };
    this.conceptService.addConcept(newConcept);
    return res.status(201).json({ message: "Concepto agregado exitosamente" });
  };

  deleteConcept = (req: Request, res: Response) => {
    const { id } = req.params;
    this.conceptService.deleteConcept(Number(id));
    return res.status(200).json({ message: "Concepto eliminado exitosamente" });
  };

  editConcept = (req: Request, res: Response) => {
    const { id } = req.params;
    const { idconcetp, namedeductions, value_assignment, tipe_concept } = req.body;
    const updatedConcept = {
      idconcetp,
      namedeductions,
      value_assignment,
      tipe_concept
    };
    this.conceptService.editConcept(Number(id), updatedConcept);
    return res.status(200).json({ message: "Concepto editado exitosamente" });
  };
}