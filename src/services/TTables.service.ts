import { TTable } from "../config"; // Import TTable model from config
import { TTablesInterface } from "../interfaces"; // Import TTablesInterface

export const getAllTTables = async () => {
  try {
    const tTables = await TTable.findAll(); // Fetch all TTables
    return {
      message: 'Consulta de tipos de mesas exitosa',
      status: 200,
      data: {
        tTables,
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
    const tTable = await TTable.findOne({ where: { id } }); // Find by ID
    if (!tTable) {
      return {
        message: 'Tipo de mesa no encontrado',
        status: 404,
        data: {
          tTable: null,
        },
      };
    }
    return {
      message: 'Tipo de mesa encontrado',
      status: 200,
      data: {
        tTable,
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

export const createTTable = async (data: TTablesInterface) => {
  try {
    const newTTable = await TTable.create(data); // Create new TTable
    return {
      message: 'Creación de tipo de mesa exitosa',
      status: 200,
      data: {
        newTTable,
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

export const updateTTable = async (id: number, newData: TTablesInterface) => {
  try {
    const updatedTTable = await TTable.update(newData, { where: { id } }); // Update by ID
    if (!updatedTTable[0]) {
      return {
        message: 'Tipo de mesa no encontrado para actualizar',
        status: 404,
        data: {
          updatedTTable: null,
        },
      };
    }
    return {
      message: 'Actualización de tipo de mesa exitosa',
      status: 200,
      data: {
        updatedTTable: updatedTTable[0], // Updated TTable
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
    const deletedTTable = await TTable.destroy({ where: { id } }); // Delete by ID
    if (!deletedTTable) {
      return {
        message: 'Tipo de mesa no encontrado para eliminar',
        status: 404,
        data: {
          deletedTTable: null,
        },
      };
    }
    return {
      message: 'Eliminación de tipo de mesa exitosa',
      status: 200,
      data: {
        deletedTTable: id, // Deleted TTable ID
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
