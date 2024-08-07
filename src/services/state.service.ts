import { StateDB } from "../config";
import { StateInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const states = await State.findAll({
        where: {
          status: true,
        },
      });*/
    const states = await StateDB.findAll();
    return {
      message: `FindAll State exitoso`,
      status: 200,
      data: {
        states,
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
    const state = await StateDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (state === null) {
      console.log("No encontrado");
      return {
        message: `StateDB no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `StateDB encontrado`,
        status: 200,
        data: {
          state,
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
export const create = async (data: StateInterface) => {
  try {
    //consultas a la base de datos van aca
    const state = await StateDB.create({
      ...data,
    });

    return {
      message: `Creacion de State exitoso`,
      status: 200,
      data: {
        state,
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

export const update = async (id: number, data: StateInterface) => {
  try {
    //consultas a la base de datos van aca
    const state = await StateDB.update(
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
      message: `Actualización del State exitoso`,
      status: 200,
      data: {
        state,
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
export const deleted = async (id: number, data: StateInterface) => {
  try {
    //consultas a la base de datos van aca
    const state = await StateDB.update(
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
      message: `Eliminación del State exitoso`,
      status: 200,
      data: {
        state,
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