import {DataTypes} from 'sequelize';
const ProviderModel={
    idProvider:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    NameProvider:{
        type:DataTypes.STRING
    }

}
export {ProviderModel};