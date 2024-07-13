import { ProductDB } from "../config";
import { ProductInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const Products = await ProductDB.findAll({
        where: {
          status: true,
        },
      });*/
    const products = await ProductDB.findAll();
    return {
      message: `Conexion productos exitoso`,
      status: 200,
      data: {
        products,
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
    const products = await ProductDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (products === null) {
      console.log("No encontrado");
      return {
        message: `Product no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Product encontrado`,
        status: 200,
        data: {
          products,
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
export const create = async (data: ProductInterface) => {
  try {
    //consultas a la base de datos van aca
    const products = await ProductDB.create({
      ...data,
    });

    return {
      message: `Creacion de Product exitoso`,
      status: 200,
      data: {
        products,
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

export const update = async (id: number, data: ProductInterface) => {
  try {
    //consultas a la base de datos van aca
    const products = await ProductDB.update(
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
      message: `Actualización de Producto exitoso`,
      status: 200,
      data: {
        products,
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
export const deleted = async (id: number, data: ProductInterface) => {
  try {
    //consultas a la base de datos van aca
    const products = await ProductDB.update(
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
      message: `Eliminación del producto exitoso`,
      status: 200,
      data: {
        products,
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
