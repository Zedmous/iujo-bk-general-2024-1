import { Supplier } from "../config";
import { SupplierInterface } from "../interfaces";

export const getAll = async () => {
  try {
    //consultas a la base de datos van aca
    /*const roles = await Role.findAll({
        where: {
          status: true,
        },
      });*/
    const suppliers = await Supplier.findAll();
    return {
      message: `FindAll Supplier exitoso`,
      status: 200,
      data: {
        suppliers,
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
    const supplier = await Supplier.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (supplier === null) {
      console.log("No encontrado");
      return {
        message: `Supplier no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Supplier encontrado`,
        status: 200,
        data: {
          supplier,
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
export const create = async (data: SupplierInterface) => {
  try {
    //consultas a la base de datos van aca
    const supplier = await Supplier.create({
      ...data,
    });

    return {
      message: `Creacion de Supplier exitoso`,
      status: 200,
      data: {
        supplier,
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

export const update = async (id: number, data: SupplierInterface) => {
  try {
    //consultas a la base de datos van aca
    const supplier = await Supplier.update(
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
      message: `Actualización del Supplier exitoso`,
      status: 200,
      data: {
        supplier,
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
export const deleted = async (id: number, data: SupplierInterface) => {
  try {
    //consultas a la base de datos van aca
    const supplier = await Supplier.update(
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
      message: `Eliminación del Supplier exitoso`,
      status: 200,
      data: {
        supplier,
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