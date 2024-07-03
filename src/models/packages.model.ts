import { DataTypes } from "sequelize";

const PackagesModel = {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },


    duration: {
        type: DataTypes.STRING(50),
        allownull: false,
    },

    id_city: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: Ciudad, 
        //     key: 'id', 
        // },
    },
};

export {PackagesModel};


