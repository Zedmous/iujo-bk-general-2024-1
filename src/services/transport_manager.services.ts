import {TransportManager} from "../config/";
import { TransportManagerInterface} from "../interfaces";

export const getAll = async () => {
    try {
      //consultas a la base de datos van aca
      /*const roles = await Role.findAll({
          where: {
            status: true,
          },
        });*/
      const transportmanager = await TransportManager.findAll();
      return {
        message: `Responsable del transporte conseguido`,
        status: 200,
        data: {
          transportmanager,
        }
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contact the administrator: error`,
        status: 500,
      };
    }
  };

  export const getOne = async (idResponsable: number) => {
    try {
      //consultas a la base de datos van aca
      const transportmanager = await TransportManager.findOne({ where: { idResponsable } }); // Busca el proyecto con título 'Mi Título'
      if (transportmanager === null) {
        console.log("No encontrado");
        return {
          message: `Responsable de Transporte no encontrado`,
          status: 404,
          data: {
          },
        };
      } else {
        return {
          message: `Salida de Transporte encontrado`,
          status: 200,
          data: {
            transportmanager,
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

  export const create = async (data: TransportManagerInterface) => {
    try {
      //consultas a la base de datos van aca
      const transportmanager = await TransportManager.create({
        ...data,
      });
  
      return {
        message: `Creacion de Responsable de Transporte exitoso`,
        status: 200,
        data: {
          transportmanager,
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

  export const update = async (idResponsable: number, data: TransportManagerInterface) => {
    try {
      //consultas a la base de datos van aca
      const transportmanager = await TransportManager.update(
        {
          ...data,
        },
        {
          where: {
            idResponsable,
          },
          returning: true,
        }
      );
  
      return {
        message: `Actualización de Rsponsable de Transporte exitoso`,
        status: 200,
        data: {
          transportmanager,
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

  export const deleted = async (idResponsable: number, data: TransportManagerInterface) => {
    try {
      //consultas a la base de datos van aca
      const transportmanager = await TransportManager.update(
        {
          status: false,
          deletedAt: new Date(),
        },
        {
          where: {
            idResponsable,
          },
          returning: true,
        }
      );
  
      return {
        message: `Eliminación de Responsable de Transporte exitoso`,
        status: 200,
        data: {
          transportmanager,
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

  export const getOneRole = async (idResponsable: number|any) => {
    try {
      //consultas a la base de datos van aca
      const role = await TransportManager.findOne({ where: { idResponsable } }); // Busca el proyecto con título 'Mi Título'
      if (role === null) {
        console.log("No encontrado");
        return {
          message: `Responsable no encontrado`,
          status: 404,
          data: {},
        };
      } else {
        return {
          message: `Responsable encontrado`,
          status: 200,
          data: {
            role,
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
  export const findRoleByName = async (name: string) => {
    try {
      //consultas a la base de datos van aca
      const role = await TransportManager.findOne({
        where: {
          name: name,
        },
      });
  
      if (!role) {
        return {
          message: `Role no encontrado`,
          status: 404,
          data: {},
        };
      } else {
        return {
          message: `Role encontrado`,
          status: 200,
          data: {
            role,
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
  