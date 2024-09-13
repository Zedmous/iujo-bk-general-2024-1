import { DataTypes } from "sequelize";

const DetailModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_nomina: {
    type: DataTypes.INTEGER,
    foreagnKey: true,
  },
  id_concepto: {
    type: DataTypes.INTEGER,
    foreagnKey: true,
  },
};

export { DetailModel };