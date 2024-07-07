import {body} from 'express-validator';

export class ServiceValidator{
     public validateService = [
        body('idProvider').notEmpty().withMessage("idProvider is required"),
        body('NameService').notEmpty().withMessage("NameService is required"),
        body('Description').notEmpty().withMessage("Description is required"),
        body('Price').notEmpty().withMessage("Price is required"),
        body('Price').isNumeric().withMessage("Price is numeric"),
    ];
}