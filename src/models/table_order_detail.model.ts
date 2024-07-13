import { DataTypes } from "sequelize";

// Order Detail Table
const TableOrderDetailModel = {
    orderDetailId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'orderId'
      }
    },
    dishId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dishes',
        key: 'dishId'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  };

export { TableOrderDetailModel };