
export interface SupplierInterface{
    id?:number;
    name:string;
    code:string;
    city_id:number;
    telephone:string;
    fiscal_address:string;
    contributor:string;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}