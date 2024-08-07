import { CityDB } from "../config";
import { CityInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const roles = await Role.findAll({
        where: {
          status: true,
        },
      });*/
    const cities = await CityDB.findAll();
    return {
      message: `FindAll City exitoso`,
      status: 200,
      data: {
        cities,
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
    const city = await CityDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (city === null) {
      console.log("No encontrado");
      return {
        message: `CityDB no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `CityDB encontrado`,
        status: 200,
        data: {
          city,
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
export const create = async (data: CityInterface) => {
  try {
    //consultas a la base de datos van aca
    const city = await CityDB.create({
      ...data,
    });

    return {
      message: `Creacion de Supplier exitoso`,
      status: 200,
      data: {
        city,
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

export const update = async (id: number, data: CityInterface) => {
  try {
    //consultas a la base de datos van aca
    const city = await CityDB.update(
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
      message: `Actualización del Supplier exitoso`,
      status: 200,
      data: {
        city,
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
export const deleted = async (id: number, data: CityInterface) => {
  try {
    //consultas a la base de datos van aca
    const city = await CityDB.update(
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
      message: `Eliminación de City exitoso`,
      status: 200,
      data: {
        city,
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