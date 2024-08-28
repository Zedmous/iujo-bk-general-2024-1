import { DataTypes } from "sequelize";

const SchedulesAttractionsModel = {
    
    id_attraction: {
        type: DataTypes.INTEGER,
    },
    id_schedule: {
        type: DataTypes.INTEGER
    }
};

export { SchedulesAttractionsModel };