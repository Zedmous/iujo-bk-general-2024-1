import { department } from "../config";
import { DepartmentInterface } from "../interfaces";

export const getAll = async () => {
    try {
      //consultas a la base de datos van aca

      const departments = await department.findAll();
      return {
        message: `C de concepto exitoso`,
        status: 200,
        data: {
          departments,
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
      const departments = await department.findOne({ where: { id } }); 
      if (departments === null) {
        console.log("No encontrado");
        return {
          message: `Concepto no encontrado`,
          status: 404,
          data: {
          },
        };
      } else {
        return {
          message: `Concepto encontrado`,
          status: 200,
          data: {
            departments,
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
  export const create = async (data: DepartmentInterface) => {
    try {
      //consultas a la base de datos van aca
      const departements = await department.create({
        ...data,
      });
  
      return {
        message: `Creacion de concepto exitoso`,
        status: 200,
        data: {
          departements,
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
  export const update = async (id: number, data: DepartmentInterface) => {
    try {
      //consultas a la base de datos van aca
      const departements = await department.update(
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
        message: `Actualización del concepto exitoso`,
        status: 200,
        data: {
          departements,
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
  export const deleted = async (id: number, data: DepartmentInterface) => {
    try {
      //consultas a la base de datos van aca
      const departements = await department.update(
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
        message: `Eliminación del concepto exitoso`,
        status: 200,
        data: {
          departements,
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
  