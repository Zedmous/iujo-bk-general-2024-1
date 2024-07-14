import { StaffDB } from "../config";
import { StaffInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const roles = await Role.findAll({
        where: {
          status: true,
        },
      });*/
    const staff = await StaffDB.findAll();
    return {
      message: `C de Rol exitoso`,
      status: 200,
      data: {
        staff,
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
    const staff = await StaffDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (!staff) {
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
          staff,
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
export const create = async (data: StaffInterface) => {
  try {
    //consultas a la base de datos van aca
    const staff = await StaffDB.create({
      ...data,
    });

    return {
      message: `Creacion de Rol exitoso`,
      status: 200,
      data: {
        staff,
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

export const update = async (id: number, data: StaffInterface) => {
  try {
    //consultas a la base de datos van aca
    const staff = await StaffDB.update(
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
        staff,
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
export const deleted = async (id: number, data: StaffInterface) => {
  try {
    //consultas a la base de datos van aca
    const staff = await StaffDB.update(
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
      message: `Eliminación del personal exitoso`,
      status: 200,
      data: {
        staff,
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
