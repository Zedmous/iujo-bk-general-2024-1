import { DataTypes } from "sequelize";

const RequirementsModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  requirement: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    default: true,
  }
};

export { RequirementsModel };
