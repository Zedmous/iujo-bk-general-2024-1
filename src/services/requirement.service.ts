import { RequirementDB } from "../config";
import { RequirementInterface } from "../interfaces";

export const getAll = async () => {
  try {
    const requirements = await RequirementDB.findAll();
    return {
      message: `Lista de requerimientos`,
      status: 200,
      data: {
        requirements,
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
    const requirement = await RequirementDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (requirement === null) {
      console.log("No encontrado");
      return {
        message: `Requerimiento no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Requerimiento encontrado`,
        status: 200,
        data: {
            requirement,
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

export const create = async (data: RequirementInterface) => {
  try {
    //consultas a la base de datos van aca
    const requirement = await RequirementDB.create({
      ...data,
    });

    return {
      message: `Se a creado el requerimiento exitoso`,
      status: 200,
      data: {
        requirement,
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

export const update = async (id: number, data: RequirementInterface) => {
  try {
    //consultas a la base de datos van aca
    const requirement = await RequirementDB.update(
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
      message: `Actualización del Requerimiento exitoso`,
      status: 200,
      data: {
        requirement,
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

export const deleted = async (id: number, data: RequirementInterface) => {
  try {
    //consultas a la base de datos van aca
    const requirement = await RequirementDB.update(
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
      message: `Eliminación del Requerimiento exitoso`,
      status: 200,
      data: {
        requirement,
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
