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
    deletedAt: {
        type: DataTypes.DATE,
    },

    id_city: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: Ciudad, 
        //     key: 'id', 
        // },
    },

    status: {
        type: DataTypes.BOOLEAN,
        default: true,
    }

};

export {PackagesModel};


