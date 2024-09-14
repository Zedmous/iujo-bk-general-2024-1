import { RoleDB } from "../config";
import { exportExcelAtoA } from "../helpers";
import { RoleInterface } from "../interfaces";

export const getAll = async () => {
  try {
    const roles = await RoleDB.findAll({
      where: {
        status: true,
      },
    });
    return {
      message: `Roles encontrados`,
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

export const getOneRole = async (id: number|any) => {
  try {
    //consultas a la base de datos van aca
    const role = await RoleDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (role === null) {
      console.log("No encontrado");
      return {
        message: `Role no encontrado`,
        status: 404,
        data: {},
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
  console.log("datos", data);
  try {
    //consultas a la base de datos van aca
    const role = await RoleDB.create({
      name: data.name,
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

export const update = async (id: number, dat: RoleInterface) => {
  try {
    //consultas a la base de datos van aca
    let role: RoleInterface | any = await RoleDB.update({
        name: dat.name,
        status: true,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );
    const { data } = await getOneRole(id);
    return {
      message: `Actualización del Rol exitoso`,
      status: 200,
      data: {
        role: data?.role,
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
    const role = await RoleDB.update(
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
    return {
      message: `Contact the administrator: error`,
      status: 500,
    };
  }
};
export const findRoleByName = async (name: string) => {
  try {
    //consultas a la base de datos van aca
    const role = await RoleDB.findOne({
      where: {
        name: name,
      },
    });

    if (!role) {
      return {
        message: `Role no encontrado`,
        status: 404,
        data: {},
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

export const reportToExcelRoles = async () => {
  try {
    const roles: any = await RoleDB.findAll();
    let report = roles.map((role: any) => role.dataValues); // Accede a dataValues de cada rol
    let mappedReport = report.map((res: any) => {
      return [res.id, res.name]; // Mapea a un arreglo de arreglos
    });
    
    const { status, message, data } = await exportExcelAtoA(
      ["id", "name"],
      mappedReport,
      "datosTest"
    );//usamos el helper para pasarle los parametros 
    return {
      message,
      status,
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contact the administrator: error`,
      status: 500,
    };
  }
};
