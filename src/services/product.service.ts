import { Product } from "../config";
import { ProductInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const Products = await Product.findAll({
        where: {
          status: true,
        },
      });*/
    const Products = await Product.findAll();
    return {
      message: `Conexion productos exitoso`,
      status: 200,
      data: {
        Products,
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
    const Products = await Product.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (Product === null) {
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
          Product,
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
    const Products = await Product.create({
      ...data,
    });

    return {
      message: `Creacion de Product exitoso`,
      status: 200,
      data: {
        Product,
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
    const Products = await Product.update(
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
        Product,
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
    const Products = await Product.update(
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
        Product,
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
