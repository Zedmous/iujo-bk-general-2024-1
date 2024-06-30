import {tickets_transport} from "../config/";
import { Tickets_transport } from "../interfaces/";

export const getAll = async () => {
    try {
      //consultas a la base de datos van aca
      /*const roles = await Role.findAll({
          where: {
            status: true,
          },
        });*/
      const tickettransp = await tickets_transport.findAll();
      return {
        message: `Precio del ticket cargado`,
        status: 200,
        data: {
            tickettransp,
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

  export const getOne = async (idboleto: number) => {
    try {
      //consultas a la base de datos van aca
      const tickettransp = await tickets_transport.findOne({ where: { idboleto } }); // Busca el proyecto con título 'Mi Título'
      if (tickettransp === null) {
        console.log("No encontrado");
        return {
          message: `Tickets no encontrado`,
          status: 404,
          data: {
          },
        };
      } else {
        return {
          message: `Ticket encontrado`,
          status: 200,
          data: {
            tickettransp,
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

  export const create = async (data: Tickets_transport) => {
    try {
      //consultas a la base de datos van aca
      const tickettransp = await tickets_transport.create({
        ...data,
      });
  
      return {
        message: `Registro del Precio del Ticket Exitoso`,
        status: 200,
        data: {
            tickettransp,
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

  export const update = async (idboleto: number, data: Tickets_transport) => {
    try {
      //consultas a la base de datos van aca
      const tickettransp = await tickets_transport.update(
        {
          ...data,
        },
        {
          where: {
            idboleto,
          },
          returning: true,
        }
      );
  
      return {
        message: `Actualización del Precio del Boleto exitoso`,
        status: 200,
        data: {
            tickettransp,
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

  export const deleted = async (idboleto: number, data: Tickets_transport) => {
    try {
      //consultas a la base de datos van aca
      const tickettransp = await tickets_transport.update(
        {
          status: false,
          deletedAt: new Date(),
        },
        {
          where: {
            idboleto,
          },
          returning: true,
        }
      );
  
      return {
        message: `Eliminación del Ticket exitoso`,
        status: 200,
        data: {
            tickettransp,
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
