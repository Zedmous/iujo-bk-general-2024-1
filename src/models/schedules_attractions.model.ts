import { DataTypes } from "sequelize";

const SchedulesAttractionsModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    attraction_id: {
        type: DataTypes.INTEGER,
    },
    schedule_id: {
        type: DataTypes.INTEGER
    }
};

export { SchedulesAttractionsModel };