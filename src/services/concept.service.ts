import { concept } from "../config";
import { ConceptInterface } from "../interfaces";

export const getAll = async () => {
    try {
      //consultas a la base de datos van aca

      const concepts = await concept.findAll();
      return {
        message: `C de concepto exitoso`,
        status: 200,
        data: {
          concepts,
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
      const concepts = await concept.findOne({ where: { id } }); 
      if (concepts === null) {
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
            concepts,
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
  export const create = async (data: ConceptInterface) => {
    try {
      //consultas a la base de datos van aca
      const concepts = await concept.create({
        ...data,
      });
  
      return {
        message: `Creacion de concepto exitoso`,
        status: 200,
        data: {
          concepts,
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
  export const update = async (id: number, data: ConceptInterface) => {
    try {
      //consultas a la base de datos van aca
      const concepts = await concept.update(
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
          concepts,
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
  export const deleted = async (id: number, data: ConceptInterface) => {
    try {
      //consultas a la base de datos van aca
      const concepts = await concept.update(
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
          concepts,
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
  
  