import { DataTypes } from "sequelize";

const distribution_purchase_order = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  inventory_id: {
    type: DataTypes.INTEGER,
  },
  purchase_order_detail_id: {
    type: DataTypes.INTEGER,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },

};

export { distribution_purchase_order };
