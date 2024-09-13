import { charge } from "../config";
import { ChargeInterface } from "../interfaces";

export const getAll = async () => {
    try {
      //consultas a la base de datos van aca

      const charges = await charge.findAll();
      return {
        message: `D de dapartamento exitoso`,
        status: 200,
        data: {
          charges,
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
  export const getOne = async (id: number) => {
    try {
      //consultas a la base de datos van aca
      const charges = await charge.findOne({ where: { id } }); 
      if (charges === null) {
        console.log("No encontrado");
        return {
          message: `Departamento no encontrado`,
          status: 404,
          data: {
          },
        };
      } else {
        return {
          message: `Concepto encontrado`,
          status: 200,
          data: {
            charges,
          },
        };
      }
    } catch (error) {
      console.log(error);
      return {
        message: `Contact the administrator: error`,
        status: 500,
      };
    }
  };
  export const create = async (data: ChargeInterface) => {
    try {
      //consultas a la base de datos van aca
      const charges = await charge.create({
        ...data,
      });
  
      return {
        message: `Creacion de concepto exitoso`,
        status: 200,
        data: {
          charges,
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
  export const update = async (id: number, data: ChargeInterface) => {
    try {
      //consultas a la base de datos van aca
      const charges = await charge.update(
        {
          ...data,
        },
        {
          where: {
            id,
          },
          returning: true,
        }
      );
  
      return {
        message: `Actualización del cargo exitoso`,
        status: 200,
        data: {
          charges,
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
  export const deleted = async (id: number, data: ChargeInterface) => {
    try {
      //consultas a la base de datos van aca
      const charges = await charge.update(
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
        message: `Eliminación del cargo exitoso`,
        status: 200,
        data: {
          charges,
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