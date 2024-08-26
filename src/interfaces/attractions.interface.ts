export interface AttractionsInterface{
    id?:number;
    name:string;
    description:string;
    type:string;
    capacity:number;
    duration:string;
    price:number;
    id_attractions_status:number;
    id_location:number;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}