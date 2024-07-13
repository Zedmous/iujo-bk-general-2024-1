import { TableDB } from "../config";
import { TableInterface } from "../interfaces";

export const getAll = async () => {
    try{
        const table = await TableDB.findAll();
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
        const table = await TableDB.findOne({where: { id }});
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
        const table = await TableDB.create({
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
        const table = await TableDB.update(
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
        const table = await TableDB.update(
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