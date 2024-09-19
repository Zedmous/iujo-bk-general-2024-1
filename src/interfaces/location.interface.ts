export interface LocationInterface{
    id?:number;
    name:string;
    latitude:number;
    longitude:number;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}