export interface RequirementInterface{
    id?:number;
    requirement:string;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
    status?:boolean;
}