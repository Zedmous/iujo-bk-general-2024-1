import { Role, Troom } from "../config";
import { TroomInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const roles = await Role.findAll({
        where: {
          status: true,
        },
      });*/
    const troom = await Role.findAll();
    return {
      message: `Type Room exitoso`,
      status: 200,
      data: {
        troom,
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
    const troom = await Role.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (troom === null) {
      console.log("No encontrado");
      return {
        message: `Type Room encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Type Room encontrado`,
        status: 200,
        data: {
          troom,
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
export const create = async (data: TroomInterface) => {
  try {
    //consultas a la base de datos van aca
    const troom = await Troom.create({
      ...data,
    });

    return {
      message: `Creacion de Type Room exitoso`,
      status: 200,
      data: {
        troom,
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

export const update = async (id: number, data: TroomInterface) => {
  try {
    //consultas a la base de datos van aca
    const troom = await Troom.update(
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
      message: `Actualización del Type Room exitoso`,
      status: 200,
      data: {
        troom,
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
export const deleted = async (id: number, data: TroomInterface) => {
  try {
    //consultas a la base de datos van aca
    const troom = await Troom.update(
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
      message: `Eliminación del Type Room exitoso`,
      status: 200,
      data: {
        troom,
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
