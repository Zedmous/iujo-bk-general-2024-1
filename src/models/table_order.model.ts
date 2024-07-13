import { DataTypes } from "sequelize";

// Order Table
const TableOrderModel = {
    orderId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'customerId'
      }
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tables',
        key: 'tableId'
      }
    },
    orderStatus: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
};

export { TableOrderModel };