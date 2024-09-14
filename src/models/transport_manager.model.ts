import { DataTypes } from "sequelize";

const TransportManagerModel = {
  idResponsable: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  telefono: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  horas: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  }
};

export { TransportManagerModel };