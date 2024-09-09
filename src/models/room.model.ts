import { DataTypes } from "sequelize";

const RoomModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precio_noche: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    estado: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    

};

export { RoomModel };