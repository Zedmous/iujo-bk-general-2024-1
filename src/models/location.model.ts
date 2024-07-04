import { DataTypes } from "sequelize";

const locationModel = {
  code_location: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  address: {
    type: DataTypes.STRING(50),
  },
  description: {
    type: DataTypes.STRING(50),
  }
};

export { locationModel };
