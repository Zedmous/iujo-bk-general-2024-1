import { Inventory } from "../config";
import { inventoryInterface } from "../interfaces/inventory.interface";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    const inventoryProducts  = await Inventory.findAll();
    return {
      message: `Successful inventory connection`,
      status: 200,
      data: {
        inventoryProducts ,
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
    const inventoryProducts  = await Inventory.findOne({ where: { id } });
    if (inventoryProducts  === null) {
      console.log("Not found");
      return {
        message: `Inventary not found`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Inventory found`,
        status: 200,
        data: {
          inventoryProducts ,
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
export const create = async (data: inventoryInterface) => {
  try {
    //consultas a la base de datos van aca
    const inventoryProducts  = await Inventory.create({
      ...data,
    });

    return {
      message: `Successful inventory creation`,
      status: 200,
      data: {
        inventoryProducts ,
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

export const update = async (id: number, data: inventoryInterface) => {
  try {
    //consultas a la base de datos van aca
    const inventoryProducts  = await Inventory.update(
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
      message: `Successful inventory update`,
      status: 200,
      data: {
        inventoryProducts ,
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
export const deleted = async (id: number, data: inventoryInterface) => {
  try {
    //consultas a la base de datos van aca
    const inventoryProducts = await Inventory.update(
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
      message: `Elimination of successful inventory`,
      status: 200,
      data: {
        inventoryProducts ,
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