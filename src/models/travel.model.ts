import { DataTypes } from "sequelize";

const TravelModel = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  decription: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  desparture_date: {
    type: DataTypes.DATE,
    allownull: false,
  },
  transport_id: {
    type: DataTypes.INTEGER,
  },
  staff_id: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
};
export { TravelModel };
