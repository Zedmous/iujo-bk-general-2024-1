import { DataTypes } from "sequelize";

// Customer Table
const TableCustomerModel = {
    customerId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customerName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
};

export { TableCustomerModel };