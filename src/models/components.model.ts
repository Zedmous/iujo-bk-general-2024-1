import { DataTypes } from "sequelize";

const ComponentsModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING(50),
    allowNull: false,
   
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false,
   
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
   
  },
  repayment: {
    type: DataTypes.INTEGER,
    allowNull: false,
   
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    default: true,
  }
};

export { ComponentsModel };
