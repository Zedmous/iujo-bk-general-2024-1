import { DataTypes } from "sequelize";

const FinancialBackgroundModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(20),

  },
  deletedAt: {
    type: DataTypes.DATE, 
  },
  amount: {
     type: DataTypes.DECIMAL, 
     allowNull: false
  },

};

export { FinancialBackgroundModel };