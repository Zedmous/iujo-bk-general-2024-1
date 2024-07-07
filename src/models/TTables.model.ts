import { DataTypes } from "sequelize";

const TTableModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    type_table_name:{
        type: DataTypes.VARCHAR,
        defaultValue: true,
    }
};

export { TTableModel };