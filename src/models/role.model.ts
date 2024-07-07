import { DataTypes } from "sequelize";

const RoleModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  status: {
    type: DataTypes.VARCHAR,
    default: true,
  }
};

export { RoleModel };