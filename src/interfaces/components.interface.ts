
export interface ComponentsInterface{
    id?:number;
    description:string;
    type:string;
    price:number;
    repayment:number;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}