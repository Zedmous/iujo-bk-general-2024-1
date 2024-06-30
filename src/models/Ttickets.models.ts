import { DataTypes } from "sequelize";

const transportation_tickets = {
  idboleto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  boleto: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  }
};

export { transportation_tickets };