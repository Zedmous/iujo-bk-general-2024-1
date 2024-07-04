import { Category } from "../config";
import { productCategoriesInterface } from "../interfaces/productCategories.interface";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    const categoryProducts = await Category.findAll();
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
    const categoryProducts = await Category.findOne({ where: { id } });
    if (Category === null) {
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
export const create = async (data: productCategoriesInterface) => {
  try {
    //consultas a la base de datos van aca
    const categoryProducts = await Category.create({
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

export const update = async (id: number, data: productCategoriesInterface) => {
  try {
    //consultas a la base de datos van aca
    const categoryProducts = await Category.update(
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
export const deleted = async (id: number, data: productCategoriesInterface) => {
  try {
    //consultas a la base de datos van aca
    const categoryProducts = await Category.update(
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