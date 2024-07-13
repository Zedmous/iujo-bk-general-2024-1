import { DataTypes } from "sequelize";

// Category Table
const TableCategoryModel = {
    categoryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
};

export { TableCategoryModel };