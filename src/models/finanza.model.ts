import { DataTypes } from "sequelize";

const finanzaModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  account_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  record_type: {
    type: DataTypes.ENUM,

  },
  amount: {
     type: DataTypes.DECIMAL, 
     allowNull: false
  },

  description: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  }
};

export { finanzaModel };
  