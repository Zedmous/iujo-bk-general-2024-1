import { DataTypes } from "sequelize";

const TTableModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        defaultValue: true,
    }
};

export { TTableModel };