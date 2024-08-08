export interface PurchaseOrderInterface{
    id?:number;
    supplier_id:number;
    emitedAt:Date;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status:String;
}