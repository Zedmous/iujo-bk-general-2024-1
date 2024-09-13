import { CustomerDB } from "../config";
import { CustomerInterface } from "../interfaces";

export const getAll = async () => {
    try{
        const customer = await CustomerDB.findAll();
        return{
            message: 'Consulta de Cliente exitosa',
            status: 200,
            data: {
                customer,
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
        const customer = await CustomerDB.findOne({where: { id }});
        if (customer === null) {
            console.log("No encontrado");
            return {
                message: 'Cliente no encontrado',
                status: 404,
                data: {
                    customer,
                },
            };
        }else{
            return{
                message: 'Cliente encontrado',
                status: 200,
                data: {
                    customer,
                },
            };
        }
    }catch (error) {
        console.log(error);
        return {
            message: 'Contacta con el admistrador: error',
            status: 500,
        };
    }
};

export const create = async (data: CustomerInterface) => {
    try{
        const customer = await CustomerDB.create({
            ...data,
        });
        return{
            message: 'Cliente registrado exitosamente',
            status: 200,
            data:{
                customer,
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

export const update = async (id: number, data: CustomerInterface) => {
    try{
        const customer = await CustomerDB.update(
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
            message: 'Cliente actualizado completamente',
            status: 200,
            data: {
                customer,
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

export const deleted = async (id: number, data: CustomerInterface) => {
    try {
      //consultas a la base de datos van aca
      const customer = await CustomerDB.update(
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
        message: `Cliente eliminado exitosamente`,
        status: 200,
        data: {
          customer,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contact the administrator: error`,
        status: 500,
      };
    }
  };
  