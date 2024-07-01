import { Products } from "../config";
import { productsInterface } from "../interfaces/products.interface";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    const Productss = await Products.findAll();
    return {
      message: `Successful product connection`,
      status: 200,
      data: {
        Productss,
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
    const Productss = await Products.findOne({ where: { id } });
    if (Productss === null) {
      console.log("Not found");
      return {
        message: `Product not found`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Product found`,
        status: 200,
        data: {
          Productss,
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
export const create = async (data: productsInterface) => {
  try {
    //consultas a la base de datos van aca
    const Productss = await Products.create({
      ...data,
    });

    return {
      message: `Successful product creation`,
      status: 200,
      data: {
        Productss,
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

export const update = async (id: number, data: productsInterface) => {
  try {
    //consultas a la base de datos van aca
    const Productss = await Products.update(
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
      message: `Successful product update`,
      status: 200,
      data: {
        Productss,
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
export const deleted = async (id: number, data: productsInterface) => {
  try {
    //consultas a la base de datos van aca
    const Productss= await Products.update(
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
      message: `Elimination of successful product`,
      status: 200,
      data: {
        Productss,
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