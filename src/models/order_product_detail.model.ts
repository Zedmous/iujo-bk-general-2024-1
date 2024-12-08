import { DataTypes } from "sequelize";

const OrderDetailProductModel = {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'orders',
      key: 'id'
    }
  },
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'products',
      key: 'id'
    }
  },
  price: {
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
};

export { OrderDetailProductModel};
