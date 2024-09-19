import { DataTypes } from "sequelize";

const ProductModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  product_category_id: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  cost: {
    type: DataTypes.DECIMAL,
  },
  createdAt:{
    type: DataTypes.DATE,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}

export { ProductModel };
