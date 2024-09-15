import { DataTypes } from "sequelize";

const CustomerModel = {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    business_name: {  
        type: DataTypes.STRING(50),
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(50),
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true,
            },
    },
    city_id: {
        type: DataTypes.INTEGER,
    },
    address: {
        type: DataTypes.STRING(100),
    },
    postcard: {
        type: DataTypes.STRING(50),
    },
    language_id: {
        type: DataTypes.INTEGER,
    },
    sa_id: {
        type: DataTypes.INTEGER,
    },
    incomelevel: {
        type: DataTypes.STRING(50),
    },
    deletedAt: {
        type: DataTypes.DATE,
      },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },  

};

export { CustomerModel };