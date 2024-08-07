import { DataTypes } from "sequelize";

const CityModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    city: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    state_id: {
        type: DataTypes.INTEGER,
    },
};

export { CityModel };
