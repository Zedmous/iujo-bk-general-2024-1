export interface RequirementInterface{
    id?:number;
    name:string;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:boolean;
}