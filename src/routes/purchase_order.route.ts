import { Router, NextFunction, Request, Response } from "express";
import { validateFields } from "../middlewares";
import { PurchaseOrderController } from "../controllers";
import { PurchaseOrderValidator } from "../validators";

const router = Router();
const purchaseOrdersValidator = new PurchaseOrderValidator();
const purchaseOrdersController = new PurchaseOrderController();

/**
 * @swagger
 * /purchase_orders:
 *   get:
 *     summary: Listar toda las ordenes
 *     tags:
 *       - Ordenes
 *     responses:
 *       200:
 *         description: Listado de orders exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Orders encontrados"
 *                 data:
 *                   type: object
 *                   properties:
 *                     purchase_orders:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 1
 *                           supplier_id:
 *                             type: integer
 *                             example: 1
 *                           emitedAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-09-09T04:33:16.000Z"
 *                            createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-09-09T04:33:16.000Z"
 *                            deletedAt:
 *                             type: string
 *                             format: date-time
 *                             example: null
 *                           status:
 *                             type: boolean
 *                             example: false
 */

router.get("/", purchaseOrdersController.allOrders); //http://localhost:3800/api/purchase_orders

/**
 * @swagger
 * /purchase_orders/{id}:
 *   get:
 *     summary: Listar toda las ordenes
 *     tags:
 *       - Ordenes
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la orden que se desea obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: detalles de orders exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order encontrado"
 *                 data:
 *                   type: object
 *                   properties:
 *                     purchase_orders:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 1
 *                           supplier_id:
 *                             type: integer
 *                             example: 1
 *                           emitedAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-09-09T04:33:16.000Z"
 *                            createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-09-09T04:33:16.000Z"
 *                            deletedAt:
 *                             type: string
 *                             format: date-time
 *                             example: null
 *                           status:
 *                             type: boolean
 *                             example: false
 *        404:
 *         description: Rol no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Role no encontrado"
 *                 data:
 *                   type: object
 *                   example: {}
 */

router.get("/:id", purchaseOrdersController.oneOrder); //http://localhost:3800/api/purchase_orders/1

/**
 * @swagger
 * /purchase_orders:
 *   post:
 *     summary: Crear una nueva orden
 *     tags:
 *       - Ordenes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "gerentesss"
 *     responses:
 *       201:
 *         description: Orden creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Rol creado exitosamente"
 *                 data:
 *                   type: object
 *                    properties:
 *                     purchase_orders:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 1
 *                           supplier_id:
 *                             type: integer
 *                             example: 1
 *                           emitedAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-09-09T04:33:16.000Z"
 *                            createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-09-09T04:33:16.000Z"
 *                            deletedAt:
 *                             type: string
 *                             format: date-time
 *                             example: null
 *                           status:
 *                             type: boolean
 *                             example: false
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
 *                         example: "Nombre en uso : administrador, para la nueva orden"
 *                       path:
 *                         type: string
 *                         example: "name"
 *                       location:
 *                         type: string
 *                         example: "body"
 */

router.post(
  "/",
  purchaseOrdersValidator.validateOrder,
  purchaseOrdersValidator.validateIfIdExist,
  validateFields,
  purchaseOrdersController.createOrder
); //http://localhost:3800/api/purchase_orders/1

/**
 * @swagger
 * /purchase_orders/{id}:
 *   put:
 *     summary: Actualizar una orden existente
 *     tags:
 *       - Ordenes
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la orden que se desea actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "gerentesss"
 *     responses:
 *       200:
 *         description: Rol actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Rol actualizado exitosamente"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                     type: integer
 *                     example: 1
 *                     supplier_id:
 *                       type: integer
 *                         example: 1
 *                     emitedAt:
 *                       type: string
 *                          format: date-time
 *                          example: "2024-09-09T04:33:16.000Z"
 *                      createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: "2024-09-09T04:33:16.000Z"
 *                      deletedAt:
 *                             type: string
 *                             format: date-time
 *                             example: null
 *                       status:
 *                             type: boolean
 *                             example: false
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
 *                         example: "Nombre en uso"
 *                       path:
 *                         type: string
 *                         example: "name"
 *                       location:
 *                         type: string
 *                         example: "body"
 *       404:
 *         description: Rol no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Orden no encontrada"
 *                 data:
 *                   type: object
 *                   example: {}
 */

router.put(
  "/:id",
  purchaseOrdersValidator.validateOrder,
  validateFields,
  purchaseOrdersController.updateOrder
); //http://localhost:3800/api/purchase_orders/1

router.delete("/:id", purchaseOrdersController.deleteOrder); //http://localhost:3800/api/purchase_orders/1
export default router;
