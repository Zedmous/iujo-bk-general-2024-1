import { area } from "../config";
import { areaInterface } from "../interfaces/area.interface";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const roles = await Role.findAll({
        where: {
          status: true,
        },
      });*/
    const areas = await area.findAll();
    return {
      message: `Successful areas connection`,
      status: 200,
      data: {
        areas,
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
    const areas = await area.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (area === null) {
      console.log("No encontrado");
      return {
        message: `Areas not found`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Areas found`,
        status: 200,
        data: {
          areas,
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

export const create = async (data: areaInterface) => {
  try {
    //consultas a la base de datos van aca
    const areas = await area.create({
      ...data,
    });

    return {
      message: `Areas created`,
      status: 200,
      data: {
        areas,
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

export const update = async (id: number, data: areaInterface) => {
  try {
    //consultas a la base de datos van aca
    const areas = await area.update(
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
      message: `Areas updated successfully`,
      status: 200,
      data: {
        areas,
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

export const deleted = async (id: number, data: areaInterface) => {
  try {
    //consultas a la base de datos van aca
    const areas = await area.update(
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
      message: `Area Deleted`,
      status: 200,
      data: {
        areas,
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
