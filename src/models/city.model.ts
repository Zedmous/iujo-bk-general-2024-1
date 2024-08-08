import { DataTypes } from "sequelize";

const CityModel = {
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
  state_id: {
    type: DataTypes.INTEGER,
  },
};

export { CityModel };