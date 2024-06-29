import { DataTypes } from "sequelize";

const locationsModel = {
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
    type: DataTypes.DECIMAL(10, 6),
    allowNull: false,
    unique: true,
  },
  longitude: {
    type: DataTypes.DECIMAL(10, 6),
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

export { locationsModel };
