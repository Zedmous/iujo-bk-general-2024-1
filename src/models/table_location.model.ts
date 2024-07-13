import { DataTypes } from "sequelize";

// Location Table
const TableLocationModel = {
    locationId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    locationName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
};

export { TableLocationModel };