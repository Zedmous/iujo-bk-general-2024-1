import { Locations } from "../config";
import { LocationsInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const locations = await Locations.findAll({
        where: {
          status: true,
        },
      });*/
    const locations = await Locations.findAll();
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
    const locations = await Locations.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (locations === null) {
      console.log("No encontrado");
      return {
        message: `Locations no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Locations encontrado`,
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
export const create = async (data: LocationsInterface) => {
  try {
    //consultas a la base de datos van aca
    const locations = await Locations.create({
      ...data,
    });

    return {
      message: `Creacion de Rol exitoso`,
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

export const update = async (id: number, data: LocationsInterface) => {
  try {
    //consultas a la base de datos van aca
    const locations = await Locations.update(
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
export const deleted = async (id: number, data: LocationsInterface) => {
  try {
    //consultas a la base de datos van aca
    const locations = await Locations.update(
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
