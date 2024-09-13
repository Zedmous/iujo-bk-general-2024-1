import { DataTypes } from "sequelize";

const ChargeModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
  },
  id_department: {
    type: DataTypes.INTEGER,
    foreagnKey: true,
  },
};

export { ChargeModel };