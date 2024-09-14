import { DataTypes } from "sequelize";

const ConceptModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
  },

  type: {
    type: DataTypes.ENUM('D', 'A'), 
  },
};

export { ConceptModel };