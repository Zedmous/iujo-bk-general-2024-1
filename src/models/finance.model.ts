import { DataTypes } from "sequelize";

const FinanceModel = {
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
    values: ['asset', 'liability', 'equity', 'income', 'expense'], // Define los valores permitidos aquí
    allowNull: false 

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

export { FinanceModel };
  