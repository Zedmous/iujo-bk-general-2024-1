import { body } from "express-validator";

class PackagesValidator{
    public validatePackages=[
        body("id").notEmpty().withMessage("Package id is required"),
        body("duration").notEmpty().withMessage("Packages duration is required"),
    ]
}

export { PackagesValidator };