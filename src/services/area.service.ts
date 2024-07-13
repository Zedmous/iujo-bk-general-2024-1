import { AreaDB } from "../config";
import { AreaInterface } from "../interfaces";

export const getAll = async () => {
  try {
    
    const Areas = await  AreaDB.findAll();
    return {
      message: `Successful Areas connection`,
      status: 200,
      data: {
        Areas,
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
    const area = await  AreaDB.findOne({ where: { id } });
    if (area === null) {
      console.log("No encontrado");
      return {
        message: `Areas not found`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Areas found`,
        status: 200,
        data: {
          area,
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

export const create = async (data: AreaInterface) => {
  try {
    //consultas a la base de datos van aca
    const Areas = await  AreaDB.create({
      ...data,
    });
    return {
      message: `Areas created`,
      status: 200,
      data: {
        Areas,
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

export const update = async (id: number, data: AreaInterface) => {
  try {
    //consultas a la base de datos van aca
    const Areas = await  AreaDB.update(
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
      message: `Areas updated successfully`,
      status: 200,
      data: {
        Areas,
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

export const deleted = async (id: number, data: AreaInterface) => {
  try {
    //consultas a la base de datos van aca
    const Areas = await  AreaDB.update(
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
      message: `Area Deleted`,
      status: 200,
      data: {
        Areas,
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
