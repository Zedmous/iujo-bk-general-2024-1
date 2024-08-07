import { DataTypes } from "sequelize";

const OrderDetailProductModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.DATE,
  },
  amount: {
    type: DataTypes.DATE,
  },
  description: {
    type: DataTypes.DATE,
  },
};

export { OrderDetailProductModel };
