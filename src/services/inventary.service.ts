import { Inventary } from "../config";
import { inventaryInterface } from "../interfaces/inventary.products.interface";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    const inventaryProducts  = await Inventary.findAll();
    return {
      message: `Successful inventary connection`,
      status: 200,
      data: {
        inventaryProducts ,
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
    const inventaryProducts  = await Inventary.findOne({ where: { id } });
    if (inventaryProducts  === null) {
      console.log("Not found");
      return {
        message: `Inventary not found`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Inventary found`,
        status: 200,
        data: {
          inventaryProducts ,
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
export const create = async (data: inventaryInterface) => {
  try {
    //consultas a la base de datos van aca
    const inventaryProducts  = await Inventary.create({
      ...data,
    });

    return {
      message: `Successful inventary creation`,
      status: 200,
      data: {
        inventaryProducts ,
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

export const update = async (id: number, data: inventaryInterface) => {
  try {
    //consultas a la base de datos van aca
    const inventaryProducts  = await Inventary.update(
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
      message: `Successful inventary update`,
      status: 200,
      data: {
        inventaryProducts ,
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
export const deleted = async (id: number, data: inventaryInterface) => {
  try {
    //consultas a la base de datos van aca
    const inventaryProducts = await Inventary.update(
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
      message: `Elimination of successful inventary`,
      status: 200,
      data: {
        inventaryProducts ,
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