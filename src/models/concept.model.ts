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
  values: {
    type: DataTypes.FLOAT(10, 2),
  },
  type: {
    type: DataTypes.ENUM('deducciones', 'asignaciones'), 
  },
};

export { ConceptModel };