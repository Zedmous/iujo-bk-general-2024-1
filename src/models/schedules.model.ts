import { DataTypes } from "sequelize";

const SchedulesModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  starting_time: {
    type: DataTypes.TIME,
  },
  ending_time: {
    type: DataTypes.TIME,
  },
  day: {
    type: DataTypes.STRING(100),
  },
  shift: {
    type: DataTypes.STRING(50),
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

export { SchedulesModel };
