import { OrderProductDetailInterface } from "./order_product_detail.interface";
import { Model, Optional, DataTypes, Sequelize } from 'sequelize';

export interface OrderInterface{
    id?:number;
    supplier_id:number;
    emitedAt:Date;
    createdAt:Date;
    deletedAt:Date;
    status:String;
    order_details?:OrderProductDetailInterface[];
}

interface OrderCreationAttributes extends Optional<OrderInterface, "id"> {}

export interface OrderIntance extends Model<OrderInterface, OrderCreationAttributes>, OrderInterface {}