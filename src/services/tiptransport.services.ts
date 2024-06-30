import {tipTransport} from "../config/";
import { TipTransp } from "../interfaces";

export const getAll = async () => {
    try {
      //consultas a la base de datos van aca
      /*const roles = await Role.findAll({
          where: {
            status: true,
          },
        });*/
      const tiptransp = await tipTransport.findAll();
      return {
        message: `tipo de transporte conseguido`,
        status: 200,
        data: {
            tiptransp,
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

  export const getOne = async (id_metodo: number) => {
    try {
      //consultas a la base de datos van aca
      const tiptransp = await tipTransport.findOne({ where: { id_metodo } }); // Busca el proyecto con título 'Mi Título'
      if (tiptransp === null) {
        console.log("No encontrado");
        return {
          message: `Tipo de Transporte no encontrado`,
          status: 404,
          data: {
          },
        };
      } else {
        return {
          message: `Tipo de Transporte encontrado`,
          status: 200,
          data: {
            tiptransp,
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

  export const create = async (data: TipTransp) => {
    try {
      //consultas a la base de datos van aca
      const tiptransp = await tipTransport.create({
        ...data,
      });
  
      return {
        message: `Creacion de Tipo de Transporte exitoso`,
        status: 200,
        data: {
            tiptransp,
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

  export const update = async (id_metodo: number, data: TipTransp) => {
    try {
      //consultas a la base de datos van aca
      const tiptransp = await tipTransport.update(
        {
          ...data,
        },
        {
          where: {
            id_metodo,
          },
          returning: true,
        }
      );
  
      return {
        message: `Actualización del Tipo de Transporte exitoso`,
        status: 200,
        data: {
            tiptransp,
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

  export const deleted = async (id_metodo: number, data: TipTransp) => {
    try {
      //consultas a la base de datos van aca
      const tiptransp = await tipTransport.update(
        {
          status: false,
          deletedAt: new Date(),
        },
        {
          where: {
            id_metodo,
          },
          returning: true,
        }
      );
  
      return {
        message: `Eliminación de Tipo de Transporte exitoso`,
        status: 200,
        data: {
            tiptransp,
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
