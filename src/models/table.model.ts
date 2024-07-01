import { DataTypes } from "sequelize";

const TableModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    number_table: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: true,
    },
    capacitance: {
        type: DataTypes.INTEGER,
    },
    location:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type_table: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    available:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
};

export { TableModel };