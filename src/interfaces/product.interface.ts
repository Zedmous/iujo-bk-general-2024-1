import { DecimalDataType } from "sequelize";

export interface ProductInterface{
    id?:number;
    name:string;
    categoryProduct:number;
    salePrice:DecimalDataType;
    productCost:DecimalDataType;
    createdAt:Date;
    active?:boolean;
}