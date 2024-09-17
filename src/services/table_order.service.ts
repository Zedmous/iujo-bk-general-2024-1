import { TableOrderDB } from "../config";
import { TableOrderInterface } from "../interfaces";

export const getAll = async () => {
    try{
        const table_order = await TableOrderDB.findAll();
        return{
            message: 'Consulta de mesas exitoso',
            status: 200,
            data: {
                table_order,
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
        const table_order = await TableOrderDB.findOne({where: { id }});
        if (table_order === null) {
            console.log("No encontrado");
            return {
                message: 'Mesa no encontrada',
                status: 404,
                data: {
                    table_order,
                },
            };
        }else{
            return{
                message: 'Mesa encontrada',
                status: 200,
                data: {
                    table_order,
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

export const create = async (data: TableOrderInterface) => {
    try{
        const table_order = await TableOrderDB.create({
            ...data,
        });
        return{
            message: 'Creacion de mesa exitosa',
            status: 200,
            data:{
                table_order,
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

export const update = async (id: number, data: TableOrderInterface) => {
    try{
        const table_order = await TableOrderDB.update(
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
                table_order,
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

export const deleted = async (id: number, data: TableOrderInterface) => {
    try{
        const table_order = await TableOrderDB.update(
            {
              status: false,
              deletedAt: new Date(),
            },
            {
              where: {
                id,
              },
              returning: true,
            }
          );

        return {
            message: 'Eliminacion de Mesa exitosa',
            status: 200,
            data: {
                table_order,
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