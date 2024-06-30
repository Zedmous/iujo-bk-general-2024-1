import { DataTypes } from "sequelize";

const supplierModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    code: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
    },
    city_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    telephone:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    fiscal_address:{
            type: DataTypes.STRING(30),  
            allowNull: false
    },
    contributor:{
        type: DataTypes.TINYINT,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
}

export { supplierModel };