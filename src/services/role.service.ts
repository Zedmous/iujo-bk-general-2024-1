import { Role } from "../config";
import { RoleInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const roles = await Role.findAll({
        where: {
          status: true,
        },
      });*/
    const roles = await Role.findAll();
    return {
      message: `C de Rol exitoso`,
      status: 200,
      data: {
        roles,
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
    const role = await Role.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (role === null) {
      console.log("No encontrado");
      return {
        message: `Role no encontrado`,
        status: 404,
        data: {
        },
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
export const create = async (data: RoleInterface) => {
  try {
    //consultas a la base de datos van aca
    const role = await Role.create({
      ...data,
    });

    return {
      message: `Creacion de Rol exitoso`,
      status: 200,
      data: {
        role,
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

export const update = async (id: number, data: RoleInterface) => {
  try {
    //consultas a la base de datos van aca
    const role = await Role.update(
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
        role,
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
export const deleted = async (id: number, data: RoleInterface) => {
  try {
    //consultas a la base de datos van aca
    const role = await Role.update(
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
        role,
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
