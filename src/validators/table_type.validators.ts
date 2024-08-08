import { body } from "express-validator";

class TableTypeValidator {
  public validateTTable = [
    // Assuming "type_table_name" is the property you want to validate:
    body("type_table_name")
      .notEmpty()
      .withMessage("Type table name is required"),

  ];
}

export { TableTypeValidator };
