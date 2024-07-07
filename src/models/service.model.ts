import { DataTypes } from "sequelize";

const ServiceModel={
    idProvider:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    IdService:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NameService:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Price:{
        type:DataTypes.DECIMAL(10,5),
        allowNull:false
    },
    Status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    DeleteAt:{
        type:DataTypes.DATE,
    }

}
export {ServiceModel};