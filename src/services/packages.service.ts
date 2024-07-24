import { Packages } from "../config";
import { PackagesInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const roles = await Role.findAll({
        where: {
          status: true,
        },
      });*/
    const paquetes = await Packages.findAll();
    return {
      message: `creacion de paquetes exitoso`,
      status: 200,
      data: {
        paquetes,
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
    const packages = await Packages.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (packages === null) {
      console.log("No encontrado");
      return {
        message: `paquete no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `paquete encontrado`,
        status: 200,
        data: {
            packages,
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
export const create = async (data: PackagesInterface) => {
  try {
    //consultas a la base de datos van aca
    const packages = await Packages.create({
      ...data,
    });

    return {
      message: `Creacion de paquete exitoso`,
      status: 200,
      data: {
        packages,
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

export const update = async (id: number, data: PackagesInterface) => {
  try {
    //consultas a la base de datos van aca
    const packages = await Packages.update(
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
      message: `Actualización del paquete exitoso`,
      status: 200,
      data: {
        packages,
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
export const deleted = async (id: number, data: PackagesInterface) => {
  try {
    //consultas a la base de datos van aca
    const packages = await Packages.update(
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
      message: `Eliminación del paquete exitoso`,
      status: 200,
      data: {
        packages,
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