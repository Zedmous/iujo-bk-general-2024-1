import { request } from "http";
import { DataTypes } from "sequelize";

const RequestModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  request_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(20),

  },
  created_at: {
    type: DataTypes.DATE, 

  },
  user_id: {
    type: DataTypes.INTEGER,

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

export { RequestModel };