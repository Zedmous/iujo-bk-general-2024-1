import { DataTypes } from "sequelize";

const ComponentPackageModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  time: {
    type: DataTypes.STRING(50),
  },
  pack_id: {
    type: DataTypes.INTEGER,
  },
  component_id: {
    type: DataTypes.INTEGER,
  },
  price : {
    type: DataTypes.DECIMAL(10, 2),
  },
 
};
 

export { ComponentPackageModel };