import { TransportDB } from "../config";
import { transportInterface } from "../interfaces";

export const getAll = async () => {
  try {
    
    const typeptransport = await TransportDB.findAll();
    return {
      message: `transporte conseguido`,
      status: 200,
      data: {
        typeptransport,
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

export const getOneRole = async (id: number|any) => {
  try {
    //consultas a la base de datos van aca
    const typetransport = await TransportDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (typetransport === null) {
      console.log("No encontrado");
      return {
        message: `Transporte no encontrado`,
        status: 404,
        data: {},
      };
    } else {
      return {
        message: `Transporte encontrado`,
        status: 200,
        data: {
          typetransport,
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

export const create = async (data: transportInterface) => {
  try {
    //consultas a la base de datos van aca
    const typetransport = await TransportDB.create({
      ...data,
    });

    return {
      message: `Creacion de Transporte exitoso`,
      status: 200,
      data: {
        typetransport,
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

export const update = async (id: number, data: transportInterface) => {
  try {
    //consultas a la base de datos van aca
    const typetransport = await TransportDB.update(
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
      message: `Actualización del Transporte exitoso`,
      status: 200,
      data: {
        typetransport,
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

export const deleted = async (id: number, data: transportInterface) => {
  try {
    //consultas a la base de datos van aca
    const typetransport = await TransportDB.update(
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
      message: `Eliminación de Transporte exitoso`,
      status: 200,
      data: {
        typetransport,
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
export const findRoleByName = async (name: string) => {
    try {
      //consultas a la base de datos van aca
      const role = await TransportDB.findOne({
        where: {
          name: name,
        },
      });
  
      if (!role) {
        return {
          message: `Transporte no encontrado`,
          status: 404,
          data: {},
        };
      } else {
        return {
          message: `Transporte encontrado`,
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
  
