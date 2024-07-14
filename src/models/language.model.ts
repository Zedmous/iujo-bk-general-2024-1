import { DataTypes } from "sequelize";

const LanguageModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
 nombre: {
    type: DataTypes.STRING (45),
  },
};

export { LanguageModel };