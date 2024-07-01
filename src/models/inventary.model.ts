import { DataTypes } from "sequelize";

const inventaryModel = {
    code_inventary: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    stock_products: {
        type: DataTypes.INTEGER,
      },
      code_products: {
        type: DataTypes.INTEGER,
      },
};

export { inventaryModel };