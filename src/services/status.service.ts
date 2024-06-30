import { Status } from "../config";
import { StatusInterface } from "../interfaces";

export const getAll = async () => {
    try {
        const statuses = await Status.findAll();
        return {
            message: `Lista de estados`,
            status: 200,
            data: {
                statuses,
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
        const statuses = await Status.findOne({ where: { id } });
        if (statuses === null) {
            console.log("No encontrado");
            return {
                message: `Estado no encontrado`,
                status: 404,
                data: {
                },
            };
        } else {
            return {
                message: `Estado encontrado`,
                status: 200,
                data: {
                    statuses,
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
export const create = async (data: StatusInterface) => {
    try {
        const statuses = await Status.create({
            ...data,
        });

        return {
            message: `Se ha creado el estado`,
            status: 200,
            data: {
                statuses,
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

export const update = async (id: number, data: StatusInterface) => {
    try {
        const statuses = await Status.update(
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
            message: `Se ha actualizado el estado`,
            status: 200,
            data: {
                statuses,
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
export const deleted = async (id: number, data: StatusInterface) => {
    try {
        const statuses = await Status.update(
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
            message: `Se ha eliminado el estado`,
            status: 200,
            data: {
                statuses,
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
