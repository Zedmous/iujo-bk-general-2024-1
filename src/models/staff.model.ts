import { DataTypes } from "sequelize";

const StaffModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  identification_card: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  name: {
    type: DataTypes.STRING(50),
  },
  lastname: {
    type: DataTypes.STRING(50),
  },
  phone: {
    type: DataTypes.STRING(20)
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
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
};

export { StaffModel };
