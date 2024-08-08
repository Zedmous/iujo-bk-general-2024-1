import { DataTypes } from "sequelize";

// Dish Table
const DishModel = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.BOOLEAN,
      default: true,
    }
};

export { DishModel };