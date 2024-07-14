import { DataTypes } from "sequelize";

const SupplierModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  code: {
    type: DataTypes.STRING(15),
    allowNull: false,
    unique: true,
  },
  city_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  fiscal_address: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  contributor: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
};

export { SupplierModel };
