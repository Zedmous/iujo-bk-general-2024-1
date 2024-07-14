import { DataTypes } from "sequelize";

const CountryCodeModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_country: {
    type: DataTypes.INTEGER,
  },

};

export { CountryCodeModel };