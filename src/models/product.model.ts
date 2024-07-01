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
  categoryProduct: {
    type: DataTypes.INTEGER,
  },
  salePrice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  productCost: {
    type: DataTypes.DECIMAL,
  },
  createdAt:{
    type: DataTypes.DATE,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}

export { ProductModel };
