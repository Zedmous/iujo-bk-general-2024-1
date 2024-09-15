import { DataTypes } from "sequelize";

const SpecialAccessModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
 type: {
    type: DataTypes.STRING (45),
  },
};

export { SpecialAccessModel };