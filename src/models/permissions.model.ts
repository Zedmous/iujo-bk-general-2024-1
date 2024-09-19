import { DataTypes } from "sequelize";

const PermissionsModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
 type: {
    type: DataTypes.STRING (45),
  },
  description: {
    type: DataTypes.STRING (45),
  },
};
 

export { PermissionsModel };