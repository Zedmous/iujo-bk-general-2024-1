import { DataTypes } from "sequelize";

const areas = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  location_id: {
    type: DataTypes.INTEGER,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
};

export { areas };
