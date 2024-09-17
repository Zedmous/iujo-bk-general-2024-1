export interface TableOrderDetailInterface{
    id?:number;
    order_id:number;
    dish_id:number;
    quantity:number;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}