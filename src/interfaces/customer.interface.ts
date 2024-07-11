export interface CustomerInterface{

    id?:number;
    razons:string;
    date:Date;
    phone:string;
    email:string;
    city_id?:number;
    address:string;
    postcard:string;
    language_id?:number;
    sa_id?:number;
    incomelevel:string;
    deletedAt:Date;
    status:boolean;
    user_id?:number;

}