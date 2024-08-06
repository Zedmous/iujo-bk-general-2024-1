import { OrderDB } from "../config";
import { OrderInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    const orders = await OrderDB.findAll();
    return {
      message: `All orders successful found`,
      status: 200,
      data: {
        orders,
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



export const getOne = async (id: number|string) => {
  try {
    //consultas a la base de datos van aca
    const orders = await OrderDB.findOne({ where: { id } });
    if (orders === null) {
      console.log("Not Found");
      return {
        message: `Order not found`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Order found`,
        status: 200,
        data: {
          orders,
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
export const create = async (data: OrderInterface) => {
  try {
    //consultas a la base de datos van aca
    const orders = await OrderDB.create({
      ...data,
    });

    return {
      message: `Order creation successful`,
      status: 200,
      data: {
        orders,
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

export const update = async (id: number|string, data: OrderInterface) => {
  try {
    //consultas a la base de datos van aca
    const orders = await OrderDB.update(
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
      message: `Successful order updated`,
      status: 200,
      data: {
        orders,
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
export const deleted = async (id: number|string, data: OrderInterface) => {
  try {
    //consultas a la base de datos van aca
    const orders = await OrderDB.update(
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
      message: `Successful order deleted`,
      status: 200,
      data: {
        orders,
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