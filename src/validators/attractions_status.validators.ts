import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { findByName, getOne } from "../services/attractions_status.service";

class AttractionsStatusValidator {
    public validateStatus = [
        body("name").notEmpty().withMessage("The attraction status is required"),
        body("name").isString().withMessage("The attracction status must be string"),
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
        const { status, message, data } = await getOne(id);
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

    public validateIfNameIsUse = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { id } = req.params;
        let { name } = req.body;
        const { status, message, data } = await findByName(name);
        if (status == 500) {
            return res.status(status).json({
                message,
            });
        } else if (status == 200) {
            const attracctionStatus: any = data?.attracctionsStatus;
            if (id) {
                if (id != attracctionStatus.id) {
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

export { AttractionsStatusValidator };