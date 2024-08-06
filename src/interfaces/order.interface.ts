export interface OrderInterface{
    id?:number;
    supplier_id:number;
    emitedAt:Date;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status:String;
}