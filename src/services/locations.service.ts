import { LocationDB } from "../config";
import { LocationInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const locations = await LocationDB.findAll({
        where: {
          status: true,
        },
      });*/
    const locations = await LocationDB.findAll();
    return {
      message: `Consulta de Ubicación exitosa`,
      status: 200,
      data: {
        locations,
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
    const locations = await LocationDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (locations === null) {
      console.log("No encontrado");
      return {
        message: `Ubicación no encontrada`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Ubicación encontrada`,
        status: 200,
        data: {
          locations,
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
export const create = async (data: LocationInterface) => {
  try {
    //consultas a la base de datos van aca
    const locations = await LocationDB.create({
      ...data,
    });

    return {
      message: `Creacion de ubicación exitosa`,
      status: 200,
      data: {
        locations,
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

export const update = async (id: number, data: LocationInterface) => {
  try {
    //consultas a la base de datos van aca
    const locations = await LocationDB.update(
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
      message: `Actualización de ubicación exitosa`,
      status: 200,
      data: {
        locations,
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
export const deleted = async (id: number, data: LocationInterface) => {
  try {
    //consultas a la base de datos van aca
    const locations = await LocationDB.update(
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
      message: `Eliminación de ubicación exitosa`,
      status: 200,
      data: {
        locations,
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
