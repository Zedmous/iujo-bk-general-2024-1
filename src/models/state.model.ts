import { DataTypes } from "sequelize";

const StateModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
};

export { StateModel };