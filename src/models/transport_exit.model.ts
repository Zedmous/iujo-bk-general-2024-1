import { DataTypes } from "sequelize";

const TransportExitModel = {
  idExit: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
  origin: {
    type: DataTypes.STRING(45),
  },
  destination: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_responsable: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idboleto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

export { TransportExitModel };