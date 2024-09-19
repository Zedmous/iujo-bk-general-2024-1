export interface TableOrderInterface{
    id?:number;
    customer_id:number;
    table_id:number;
    table_order_status_id:number;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}
