import { DataTypes } from "sequelize";

const categoryProductsModel = {
    code_category: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
    },
  };
  
export { categoryProductsModel };