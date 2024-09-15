import { Components } from "../config";
import {  ComponentsInterface } from "../interfaces";

export const getAll = async () => {
  try {
    const Component = await Components.findAll();
    return {
      message: `Lista de Componentes`,
      status: 200,
      data: {
        Component,
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
    const Component = await Components.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (Component === null) {
      console.log("No encontrado");
      return {
        message: `Componente no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Componente encontrado`,
        status: 200,
        data: {
          Component,
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

export const create = async (data: ComponentsInterface) => {
  try {
    //consultas a la base de datos van aca
    const Component = await Components.create({
      ...data,
    });

    return {
      message: `Se a creado el Componente exitoso`,
      status: 200,
      data: {
        Component,
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

export const update = async (id: number, data: ComponentsInterface) => {
  try {
    //consultas a la base de datos van aca
    const Component = await Components.update(
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
      message: `Actualización del Componente exitoso`,
      status: 200,
      data: {
        Component,
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

export const deleted = async (id: number, data: ComponentsInterface) => {
  try {
    //consultas a la base de datos van aca
    const Component = await Components.update(
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
      message: `Eliminación del Componente exitoso`,
      status: 200,
      data: {
        Component,
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
