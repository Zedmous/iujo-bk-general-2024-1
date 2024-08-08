import { DataTypes } from "sequelize";

// Order Table
const TableOrderModel = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    table_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    table_order_status_id: {
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

export { TableOrderModel };