import { DataTypes } from "sequelize";

const AttractionsRequirementsModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    attraction_id: {
        type: DataTypes.INTEGER,
    },
    requirement_id: {
        type: DataTypes.INTEGER
    }
};

export { AttractionsRequirementsModel };