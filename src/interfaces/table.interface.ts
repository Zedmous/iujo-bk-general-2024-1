export interface TableInterface{
    id?:number;
    name:string;
    capacitance:number;
    location_id:number;
    table_type_id:number;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}

