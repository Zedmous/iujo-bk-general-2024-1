import { DataTypes } from "sequelize";

const AttractionsStatusModel = {
    
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
    deletedAt: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.BOOLEAN,
        default: true,
    }
};

export { AttractionsStatusModel };