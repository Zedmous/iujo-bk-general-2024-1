import { DataTypes } from "sequelize";

const conceptsModel = {
  idconcepts: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  namedeductions: {
    type: DataTypes.STRING(50),
  },
  valueassignment: {
    type: DataTypes.FLOAT(10, 2),
  },
  tipeconcept: {
    type: DataTypes.STRING(50),
  },
};

export { conceptsModel };