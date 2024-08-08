import { DataTypes, Model } from "sequelize";

const OrderModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  supplier_id: {
    type: DataTypes.INTEGER,
  },
  emitedAt: {
    type: DataTypes.DATE,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Pending",
  },
};

export { OrderModel };
