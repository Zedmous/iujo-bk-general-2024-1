import { categoryProduct } from "../config";
import { categoryProductInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const categoryProducts = await categoryProduct.findAll({
        where: {
          status: true,
        },
      });*/
    const categoryProducts = await categoryProduct.findAll();
    return {
      message: `todos las categorias exitoso`,
      status: 200,
      data: {
        categoryProducts,
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
    const categoryProducts = await categoryProduct.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (categoryProduct === null) {
      console.log("No encontrado");
      return {
        message: `categoryProduct no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `categoryProduct encontrado`,
        status: 200,
        data: {
          categoryProduct,
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
export const create = async (data: categoryProductInterface) => {
  try {
    //consultas a la base de datos van aca
    const categoryProducts = await categoryProduct.create({
      ...data,
    });

    return {
      message: `Creacion de Categoria exitoso`,
      status: 200,
      data: {
        categoryProduct,
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

export const update = async (id: number, data: categoryProductInterface) => {
  try {
    //consultas a la base de datos van aca
    const categoryProducts = await categoryProduct.update(
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
      message: `Actualización de Categoria exitoso`,
      status: 200,
      data: {
        categoryProduct,
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
export const deleted = async (id: number, data: categoryProductInterface) => {
  try {
    //consultas a la base de datos van aca
    const categoryProducts = await categoryProduct.update(
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
      message: `Eliminación del Categoria exitoso`,
      status: 200,
      data: {
        categoryProduct,
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
