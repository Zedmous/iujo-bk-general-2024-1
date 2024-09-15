import { DataTypes } from "sequelize";

const AdvancementModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  date: {
    type: DataTypes.DATE
  },
  reservation_id: {
    type: DataTypes.INTEGER,
  },
  
};
 

export { AdvancementModel };