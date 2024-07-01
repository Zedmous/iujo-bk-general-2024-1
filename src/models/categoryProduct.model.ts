import { DataTypes } from "sequelize";

const categoryProductModel = {
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
  createdAt:{
    type: DataTypes.DATE,
  },
  deletedAt:{
    type: DataTypes.DATE,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}

export { categoryProductModel };
