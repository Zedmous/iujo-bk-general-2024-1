export interface ProductInterface{
    id?:number;
    name:string;
    product_category_id:number;
    price:number;
    cost:number;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:boolean;
}