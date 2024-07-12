import { DataTypes } from "sequelize";

const InventoryModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  stock_products: {
    type: DataTypes.INTEGER,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
  area_id: {
    type: DataTypes.INTEGER,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
};

export { InventoryModel };
