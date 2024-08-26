import { DataTypes } from "sequelize";

const AttractionsModel = {
    
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
    },
    type: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    duration: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        unique: true,
    },
    id_attractions_status: {
        type: DataTypes.INTEGER,
    },
    id_location: {
        type: DataTypes.INTEGER,
    },
    deletedAt: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.BOOLEAN,
        default: true,
    }
};

export { AttractionsModel };