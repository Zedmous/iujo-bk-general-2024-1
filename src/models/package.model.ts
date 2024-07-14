import { DataTypes } from "sequelize";

const PackageModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  duration : {
    type: DataTypes.STRING(50),
  },
  city_id: {
    type: DataTypes.INTEGER,
  },
 
};
 

export { PackageModel };