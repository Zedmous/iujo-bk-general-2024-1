import { DataTypes } from "sequelize";

const DepartmentModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
  },
};

export { DepartmentModel };