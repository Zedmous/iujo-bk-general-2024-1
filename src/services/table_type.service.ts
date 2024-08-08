import { TableTypeDB } from "../config"; // Import TTable model from config
import { TableTypeInterface } from "../interfaces"; // Import TableTypeInterface

export const getAllTTables = async () => {
  try {
    const table_types = await TableTypeDB.findAll(); // Fetch all TTables
    return {
      message: 'Consulta de tipos de mesas exitosa',
      status: 200,
      data: {
        table_types,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Contacta con el administrador',
      status: 500,
    };
  }
};

export const getOneTTable = async (id: number) => {
  try {
    const table_type = await TableTypeDB.findOne({ where: { id } }); // Find by ID
    if (!table_type) {
      return {
        message: 'Tipo de mesa no encontrado',
        status: 404,
        data: {
          table_type: null,
        },
      };
    }
    return {
      message: 'Tipo de mesa encontrado',
      status: 200,
      data: {
        table_type,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Contacta con el administrador',
      status: 500,
    };
  }
};

export const createTTable = async (data: TableTypeInterface) => {
  try {
    const table_type = await TableTypeDB.create({
      ...data,
    }); // Create new TTable
    return {
      message: 'Creación de tipo de mesa exitosa',
      status: 200,
      data: {
        table_type,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Contacta con el administrador',
      status: 500,
    };
  }
};

export const updateTTable = async (id: number, newData: TableTypeInterface) => {
  try {
    const table_type = await TableTypeDB.update(newData, { where: { id } }); // Update by ID
    if (!table_type[0]) {
      return {
        message: 'Tipo de mesa no encontrado para actualizar',
        status: 404,
        data: {
          table_type: null,
        },
      };
    }
    return {
      message: 'Actualización de tipo de mesa exitosa',
      status: 200,
      data: {
        table_type: table_type[0], // Updated TTable
      },
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Contacta con el administrador',
      status: 500,
    };
  }
};

export const deleteTTable = async (id: number) => {
  try {
    const table_type = await TableTypeDB.update(
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
      message: 'Eliminación de tipo de mesa exitosa',
      status: 200,
      data: {
        table_type: table_type, // Deleted TTable ID
      },
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Contacta con el administrador',
      status: 500,
    };
  }
};
