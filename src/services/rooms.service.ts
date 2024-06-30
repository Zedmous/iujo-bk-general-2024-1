import { Room } from "../config";
import { RoomInterface } from "../interfaces/rooms.interface";

export const getAll = async () => {
    try {
      const room = await Room.findAll();
      return {
        message: `Room exitoso`,
        status: 200,
        data: {
          room,
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
      const room = await Room.findOne({ where: { id } });
      if (room === null) {
        console.log("No encontrado");
        return {
          message: `Room encontrado`,
          status: 404,
          data: {
          },
        };
      } else {
        return {
          message: `Room encontrado`,
          status: 200,
          data: {
            room,
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


  export const create = async (data: RoomInterface) => {
    try {
      //consultas Crear TRomm
      const room = await Room.create({
        ...data,
      });
  
      return {
        message: `Creacion de Room exitoso`,
        status: 200,
        data: {
          room,
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


  export const update = async (id: number, data: RoomInterface) => {
    try {
      //consultas Buscar TRoom
      const room = await Room.update(
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
        message: `Actualización del Type Room exitoso`,
        status: 200,
        data: {
          room
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


  export const deleted = async (id: number, data: RoomInterface) => {
    try {
      //consultas Borrado logito T
      const room = await Room.update(
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
        message: `Eliminación del Type Room exitoso`,
        status: 200,
        data: {
          room
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
  