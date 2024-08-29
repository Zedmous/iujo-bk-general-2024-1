import { DataTypes } from "sequelize";

const purchase_order_details = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  purchease_order_id: {
    type: DataTypes.INTEGER,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
};

export { purchase_order_details };
