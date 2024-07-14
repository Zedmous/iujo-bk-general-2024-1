import { Service } from "../config";
import { serviceInterface} from "../interfaces";

export const create = async (data:serviceInterface) =>{
    
    try{
        const service = await Service.create({
            ...data
        });
        return {
            message: `Creacion de Rol exitoso`,
            status: 200,
            data: {
              service,
            },
          };
    }catch(error){
        console.log(error);
        return {
        message: `Contact the administrator: error`,
        status: 500,
        };

    }
}

export const readAll = async () => {
    try {
      const services = await Service.findAll();
      return {
        message: `C de Rol exitoso`,
        status: 200,
        data: {
            services,
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

  export const readOne = async (id: number) => {
    try {
      //consultas a la base de datos van aca
      const service = await Service.findOne({ where: { IdService:id } }); 
      if (service === null) {
        console.log("No encontrado");
        return {
          message: `Role no encontrado`,
          status: 404,
          data: {
          },
        };
      } else {
        return {
          message: `Role encontrado`,
          status: 200,
          data: {
            service,
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
  


export const update = async (id: number, data: serviceInterface) => {
    try {
      //consultas a la base de datos van aca
      const service = await Service.update(
        {
          ...data,
          UpdatedeAt:Date.now()
        },
        {
          where: {
            IdService:id,
          },
          returning: true,
        }
      );
  
      return {
        message: `Actualización del Servicio Exitosa`,
        status: 200,
        data: {
            service,
            DeleteAt: new Date(),
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


  export const deleted = async (id: number, data: serviceInterface) => {
    try {
      //consultas a la base de datos van aca
      const service = await Service.update(
        {
          Status: false,
          DeleteAt: new Date(),
        },
        {
          where: {
            IdService:id,
          },
          returning: true,
        }
      );
  
      return {
        message: `Eliminación del Servicio Exitosa`,
        status: 200,
        data: {
            service,
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