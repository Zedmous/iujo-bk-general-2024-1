import { DataTypes } from "sequelize";

const TTransport = {
  id_metodo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tipo_transporte: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  }
};

export { TTransport };