import {TransportExit} from "../config/";
import { TransportExitInterface} from "../interfaces";
import { exportExcelAtoA } from "../helpers";


export const getAll = async () => {
    try {
      //consultas a la base de datos van aca
      /*const roles = await Role.findAll({
          where: {
            status: true,
          },
        });*/
      const transportexit = await TransportExit.findAll();
      return {
        message: `Salida del transporte conseguido`,
        status: 200,
        data: {
          transportexit,
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

  export const getOne = async (idExit: number) => {
    try {
      //consultas a la base de datos van aca
      const transportexit = await TransportExit.findOne({ where: { idExit } }); // Busca el proyecto con título 'Mi Título'
      if (transportexit === null) {
        console.log("No encontrado");
        return {
          message: `Salida de Transporte no encontrado`,
          status: 404,
          data: {
          },
        };
      } else {
        return {
          message: `Salida de Transporte encontrado`,
          status: 200,
          data: {
            transportexit,
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

  export const create = async (data: TransportExitInterface) => {
    try {
      //consultas a la base de datos van aca
      const transportexit = await TransportExit.create({
        ...data,
      });
  
      return {
        message: `Creacion de Salida de Transporte exitoso`,
        status: 200,
        data: {
          transportexit,
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

  export const update = async (idExit: number, data: TransportExitInterface) => {
    try {
      //consultas a la base de datos van aca
      const transportexit = await TransportExit.update(
        {
          ...data,
        },
        {
          where: {
            idExit,
          },
          returning: true,
        }
      );
  
      return {
        message: `Actualización de Salida de Transporte exitoso`,
        status: 200,
        data: {
          transportexit,
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

  export const deleted = async (idExit: number, data: TransportExitInterface) => {
    try {
      //consultas a la base de datos van aca
      const transportexit = await TransportExit.update(
        {
          status: false,
          deletedAt: new Date(),
        },
        {
          where: {
            idExit,
          },
          returning: true,
        }
      );
  
      return {
        message: `Eliminación de Salida de Transporte exitoso`,
        status: 200,
        data: {
          transportexit,
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
  export const getOneRole = async (idExit: number|any) => {
    try {
      //consultas a la base de datos van aca
      const role = await TransportExit.findOne({ where: { idExit } }); // Busca el proyecto con título 'Mi Título'
      if (role === null) {
        console.log("No encontrado");
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
  export const findRoleByName = async (name: string) => {
    try {
      //consultas a la base de datos van aca
      const role = await TransportExit.findOne({
        where: {
          name: name,
        },
      });
  
      if (!role) {
        return {
          message: `Salida no encontrado`,
          status: 404,
          data: {},
        };
      } else {
        return {
          message: `Ruta encontrada`,
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
  export const reportToExcelRoles = async () => {
    try {
      const roles: any = await TransportExit.findAll();
      let report = roles.map((role: any) => role.dataValues); // Accede a dataValues de cada rol
      let mappedReport = report.map((res: any) => {
        return [res.id, res.name]; // Mapea a un arreglo de arreglos
      });
      
      const { status, message, data } = await exportExcelAtoA(
        ["id", "name"],
        mappedReport,
        "datosTest"
      );//usamos el helper para pasarle los parametros 
      return {
        message,
        status,
        data,
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contact the administrator: error`,
        status: 500,
      };
    }
  };