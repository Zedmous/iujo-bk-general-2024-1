import { DataTypes } from "sequelize";

const ComponentModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING(50),
  },
  type: {
    type: DataTypes.STRING(50),
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  refund: {
    type: DataTypes.DECIMAL(10, 2),
  },
 
};
 

export { ComponentModel };