import { Router } from "express";
import { validateFields } from "../middlewares";
import { RequirementsController } from "../controllers";
import { RequirementsValidator } from "../validators";

const router = Router();
const requirementsValidator = new RequirementsValidator();
const requirementsController = new RequirementsController();

/**
 * @swagger
 * /requirements/report:
 *   get:
 *     summary: Obtener un reporte en Excel de todos los requerimientos
 *     tags:
 *       - Requirements
 *     responses:
 *       200:
 *         description: Reporte creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Reporte creado exitosamente"
 *                 data:
 *                   type: object
 *                   properties:
 *                     report:
 *                       type: string
 *                       description: "Reporte en Excel en base64 de los requerimientos"
 *                       example: "UEsDBBQAAAAAAAAAAACkAYS4tQIAALUCAAAaAAAAeGwvX3JlbHMvd29ya2Jvb2sueG1sLnJlbHM8P3htbCB..."
 */
router.get("/", requirementsController.all);//http://localhost:3308/api/requirements

router.get("/:id", requirementsController.one);//http://localhost:3308/api/requirements/1

/**
 * @swagger
 * /requirements:
 *   post:
 *     summary: Crear un nuevo requerimiento
 *     tags:
 *       - Requirements
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Nuevo Requerimiento"
 *     responses:
 *       201:
 *         description: Requerimiento creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Requerimiento creado exitosamente"
 *                 data:
 *                   type: object
 *                   properties:
 *                     requirement:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           example: 1
 *                         name:
 *                           type: string
 *                           example: "Nuevo Requerimiento"
 *                         deletedAt:
 *                           type: string
 *                           format: date-time
 *                           example: null
 *                         status:
 *                           type: boolean
 *                           example: true
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-09-16T21:48:42.000Z"
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2024-09-16T21:48:42.000Z"
 *       400:
 *         description: Solicitud incorrecta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: "field"
 *                       msg:
 *                         type: string
 *                         example: "Nombre en uso: 'Nuevo Requerimiento'"
 *                       path:
 *                         type: string
 *                         example: "name"
 *                       location:
 *                         type: string
 *                         example: "body"
 */
router.post("/",requirementsValidator.validateRequirements,validateFields, requirementsController.createRequirement);//http://localhost:3308/api/requirements

router.put("/:id",requirementsValidator.validateRequirements,validateFields, requirementsController.updateRequirement);//http://localhost:3308/api/requirements/1


router.delete("/:id", requirementsController.deleteRequirement);//http://localhost:3308/api/requirements/1



export default router;