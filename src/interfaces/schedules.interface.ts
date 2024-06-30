

export interface SchedulesInterface{
    id?:number;
    starting_time?:string;
    ending_time?:string;
    day:string;
    shift?:string;
    status?:boolean;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}