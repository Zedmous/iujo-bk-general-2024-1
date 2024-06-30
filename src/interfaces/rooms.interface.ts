import { ForeignKey } from "sequelize";

export interface RoomInterface{
    id: number;
    name: string;
    precio_noche: number;
    status: boolean;
    createdAt: Date;
    updateAt: Date;
    type_id: number;
    location_id: number;
}