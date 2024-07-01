import { Table } from "../config";
import { TableInterface } from "../interfaces";

export const getAll = async () => {
    try{
        const table = await Table.findAll();
        return{
            message: 'Consulta de mesas exitoso',
            status: 200,
            data: {
                table,
            },
        };
    }catch (error) {
        console.log(error);
        return{
            message:'Contacta con el administrador',
            status: 500,
        };
    }
};

export const getOne = async (id: number) => {
    try{
        const table = await Table.findOne({where: { id }});
        if (table === null) {
            console.log("No encontrado");
            return {
                message: 'Mesa no encontrada',
                status: 404,
                data: {
                    table,
                },
            };
        }else{
            return{
                message: 'Mesa encontrada',
                status: 200,
                data: {
                    table,
                },
            };
        }
    }catch (error) {
        console.log(error);
        return {
            message: 'Contacta con el adimistrador: error',
            status: 500,
        };
    }
};

export const create = async (data: TableInterface) => {
    try{
        const table = await Table.create({
            ...data,
        });
        return{
            message: 'Creacion de mesa exitosa',
            status: 200,
            data:{
                table,
            },
        };
    }catch (error) {
        console.log(error);
        return{
            message: 'Contacta con el administrador: error',
            status: 500,
        };
    }
};

export const update = async (id: number, data: TableInterface) => {
    try{
        const table = await Table.update(
            {
                ...data,
            },
            {
                where:{
                    id,
                },
                returning: true,
            }
        );

        return{
            message: 'Actualizacion de mesa completa',
            status: 200,
            data: {
                table,
            },
        };
    }catch (error) {
        console.log(error);
        return{
            message: 'Contacta al administrador: error',
            status: 500,
        };
    }
};

export const deleted = async (id: number, data: TableInterface) => {
    try{
        const table = await Table.destroy(
            {
                where: {
                id: id,
                }
                //agregar la confirmacion de la eliminacion
            }
        );

        return {
            message: 'Eliminacion de Mesa exitosa',
            status: 200,
            data: {
                table,
            },
        };
    }catch (error) {
        console.log(error);
        return {
            message: 'Contactar con el administrador: error',
            status: 500,
        };
    }
};