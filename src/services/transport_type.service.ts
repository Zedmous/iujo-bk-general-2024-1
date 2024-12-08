import { TransportTypeDB } from "../config";
import { TransportTypeInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const roles = await Role.findAll({
          where: {
            status: true,
          },
        });*/
    const typeptransport = await TransportTypeDB.findAll();
    return {
      message: `tipo de transporte conseguido`,
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

export const getOne = async (id: number) => {
  try {
    //consultas a la base de datos van aca
    const typetransport = await TransportTypeDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (typetransport === null) {
      console.log("No encontrado");
      return {
        message: `Tipo de Transporte no encontrado`,
        status: 404,
        data: {},
      };
    } else {
      return {
        message: `Tipo de Transporte encontrado`,
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

export const create = async (data: TransportTypeInterface) => {
  try {
    //consultas a la base de datos van aca
    const typetransport = await TransportTypeDB.create({
      ...data,
    });

    return {
      message: `Creacion de Tipo de Transporte exitoso`,
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

export const update = async (id: number, data: TransportTypeInterface) => {
  try {
    //consultas a la base de datos van aca
    const typetransport = await TransportTypeDB.update(
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
      message: `Actualización del Tipo de Transporte exitoso`,
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

export const deleted = async (id: number, data: TransportTypeInterface) => {
  try {
    //consultas a la base de datos van aca
    const typetransport = await TransportTypeDB.update(
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
      message: `Eliminación de Tipo de Transporte exitoso`,
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
