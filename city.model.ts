import { DataTypes } from "sequelize";

const StateModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
  id_state: {
    type: DataTypes.INTEGER,
  },
};

export { StateModel };