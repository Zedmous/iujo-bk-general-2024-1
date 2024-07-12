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
      message: `C de Rol exitoso`,
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
        message: `Direccion no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Direccion encontrado`,
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
      message: `Creacion de direccion exitosa`,
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
      message: `Actualización del Rol exitoso`,
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
      message: `Eliminación del Rol exitoso`,
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
