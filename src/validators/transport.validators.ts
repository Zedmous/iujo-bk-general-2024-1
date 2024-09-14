import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { findRoleByName, getOneRole } from "../services/transport.service";

class TransportValidator {
    public validatetiptransp = [
        body("name").notEmpty().withMessage("The name of the type of transport is required"),
        body("name").isString().withMessage("The name of the type of transport must be string"),
        body("capacity").notEmpty().withMessage("The Capacity of the type of transport is required"),
        body("capacity").isNumeric().withMessage("The Capacity of the type of transport must be numer"),
        body("tansport_type_id").notEmpty().withMessage("The Tansport_type_id of the type of transport is required"),
        body("tansport_type_id").isNumeric().withMessage("The Tansport_type_id of the type of transport must be numer"),

    ];
    verifyId = (req: Request, res: Response, next: NextFunction) => {
        next();
    };
    public validateIfIdExist = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { id } = req.params;
        const { status, message, data } = await getOneRole(id);
        if (status == 500) {
            return res.status(status).json({
                message,
            });
        } else if (status == 404) {
            if (id) {
                return res.status(404).json({
                    errors: [
                        {
                            type: "field",
                            msg: `El parametro id : ${id}, no existe en la base de datos.`,
                            path: "id",
                            location: "param",
                        },
                    ],
                });
            }
        }
        next();
    };
    //un middleware en el caso de campo unico
    public validateIfNameIsUse = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { id } = req.params;
        let { name } = req.body;
        const { status, message, data } = await findRoleByName(name);
        if (status == 500) {
            return res.status(status).json({
                message,
            });
        } else if (status == 200) {
            const role: any = data?.role;
            if (id) {
                //caso si es para actualizar datos
                if (id != role.id) {
                    return res.status(400).json({
                        errors: [
                            {
                                type: "field",
                                msg: `Nombre en uso : ${name}, para el registro actual`,
                                path: "name",
                                location: "body",
                            },
                        ],
                    });
                }
            } else {
                //caso si es para registrar un nuevo rol
                return res.status(400).json({
                    errors: [
                        {
                            type: "field",
                            msg: `Nombre en uso : ${name}, para el nuevo rol`,
                            path: "name",
                            location: "body",
                        },
                    ],
                });
            }
        }
        next();
    };
}
export { TransportValidator };