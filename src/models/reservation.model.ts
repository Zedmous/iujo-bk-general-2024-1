import { DataTypes } from "sequelize";

const ReservationModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Date: {
    type: DataTypes.DATE
  },
  expirationDate: {
    type: DataTypes.DATE
  },
  time: {
    type: DataTypes.STRING(50),
  },
  refund: {
    type: DataTypes.DECIMAL(10, 2),
  },
  percentage: {
    type: DataTypes.DECIMAL(10, 2),
  },
  customer_id: {
    type: DataTypes.INTEGER,
  },
  package_id: {
    type: DataTypes.INTEGER,
  },
  
};
 

export { ReservationModel };