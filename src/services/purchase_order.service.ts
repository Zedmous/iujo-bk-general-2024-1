import { PurchaseOrderDB } from "../config";
import { PurchaseOrderInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    const orders = await PurchaseOrderDB.findAll();
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
    const orders = await PurchaseOrderDB.findOne({ where: { id } });
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
export const create = async (data: PurchaseOrderInterface) => {
  try {
    //consultas a la base de datos van aca
    const orders = await PurchaseOrderDB.create({
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

export const update = async (id: number|string, data: PurchaseOrderInterface) => {
  try {
    //consultas a la base de datos van aca
    const orders = await PurchaseOrderDB.update(
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
export const deleted = async (id: number|string, data: PurchaseOrderInterface) => {
  try {
    //consultas a la base de datos van aca
    const orders = await PurchaseOrderDB.update(
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