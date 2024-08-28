import { DataTypes } from "sequelize";

const AttractionsRequirementsModel = {
    
    id_attraction: {
        type: DataTypes.INTEGER,
    },
    id_requirement: {
        type: DataTypes.INTEGER
    }
};

export { AttractionsRequirementsModel };