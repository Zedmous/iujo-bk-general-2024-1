import { DataTypes } from "sequelize";

const LocationModel = {
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
  latitude: {
    type: DataTypes.DECIMAL(10, 8), 
    allowNull: false,
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8), 
    allowNull: false,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    default: true,
  }
};

export { LocationModel };
