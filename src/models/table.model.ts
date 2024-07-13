import { DataTypes } from "sequelize";

const TableModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  capacitance: {
    type: DataTypes.INTEGER,
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  table_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { TableModel };
