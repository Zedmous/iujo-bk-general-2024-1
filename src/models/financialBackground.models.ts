import { DataTypes } from "sequelize";

const financialBackgroundModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  backgroundName: {
    type: DataTypes.STRING(20),
    allowNull: false
  },

  description: {
    type: DataTypes.STRING(20),

  },

  created_at: {
    type: DataTypes.DATE, 

  },

  amount: {
     type: DataTypes.DECIMAL, 
     allowNull: false
  },

};

export { financialBackgroundModel };