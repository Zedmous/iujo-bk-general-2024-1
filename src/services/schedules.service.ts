import { Schedules } from "../config";
import { SchedulesInterface } from "../interfaces";

export const getAll = async () => {
  try {
    const schedulesData = await Schedules.findAll();
    return {
      message: `Lista de horarios`,
      status: 200,
      data: {
        schedulesData,
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
    
    const schedulesData = await Schedules.findOne({ where: { id } });
    if (schedulesData === null) {
      console.log("No se encontro el horario");
      return {
        message: `Horario no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Horario encontrado`,
        status: 200,
        data: {
            schedulesData,
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

export const create = async (data: SchedulesInterface) => {
  try {
      const schedulesData = await Schedules.create({
          ...data,
      });

      return {
          message: `Se ha creado el horario`,
          status: 200,
          data: {
              schedulesData,
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

export const update = async (id: number, data: SchedulesInterface) => {
  try {
    
    const schedulesData = await Schedules.update(
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
      message: `Actualización del horario exitosa`,
      status: 200,
      data: {
        schedulesData,
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



export const deleted = async (id: number, data: SchedulesInterface) => {
  try {
    const schedulesData = await Schedules.update(
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
      message: `Eliminación del horario exitosa`,
      status: 200,
      data: {
        schedulesData,
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
