import { ProductCategoryDB } from "../config";
import { ProductCategoryInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    const categoryProducts = await ProductCategoryDB.findAll();
    return {
      message: `All categories successful`,
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
    const categoryProducts = await ProductCategoryDB.findOne({ where: { id } });
    if (categoryProducts === null) {
      console.log("Not Found");
      return {
        message: `Category product not found`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Category product found`,
        status: 200,
        data: {
          categoryProducts,
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
export const create = async (data: ProductCategoryInterface) => {
  try {
    //consultas a la base de datos van aca
    const categoryProducts = await ProductCategoryDB.create({
      ...data,
    });

    return {
      message: `Category creation successful`,
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

export const update = async (id: number, data: ProductCategoryInterface) => {
  try {
    //consultas a la base de datos van aca
    const categoryProducts = await ProductCategoryDB.update(
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
      message: `Successful category update`,
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
export const deleted = async (id: number, data: ProductCategoryInterface) => {
  try {
    //consultas a la base de datos van aca
    const categoryProducts = await ProductCategoryDB.update(
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
      message: `Successful Category Deletion`,
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