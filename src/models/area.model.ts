import { DataTypes } from "sequelize";

const areaModel = {
  code_area: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  code_inventory: {
    type: DataTypes.INTEGER,
  },
  code_location: {
    type: DataTypes.INTEGER,
  }
};

export { areaModel };
