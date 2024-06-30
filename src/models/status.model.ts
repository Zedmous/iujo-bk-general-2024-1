import { DataTypes } from "sequelize";

const StatusModel = {
    
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    attraction_status: {
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

export { StatusModel };