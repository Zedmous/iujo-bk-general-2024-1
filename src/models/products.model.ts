import { DataTypes } from "sequelize";

const productsModel = {
    code_product: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    date_expiration: {
        type: DataTypes.DATE,
      },
      code_category: {
        type: DataTypes.INTEGER,
      },
};

export { productsModel };