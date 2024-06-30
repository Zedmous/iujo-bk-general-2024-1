import { DataTypes } from "sequelize";

const StaffModel = {
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
  lastname: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.NUMBER(),
    unique: true,
  },
  borndate: {
    type: DataTypes.DATE,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  address: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  personId: {
    type: DataTypes.NUMBER(),
    unique: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    default: true,
  }
};

export { StaffModel };
