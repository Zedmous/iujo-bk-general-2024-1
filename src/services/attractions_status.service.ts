import { AttractionsStatus } from "../config";
import { AttractionsStatusInterface } from "../interfaces";

export const getAll = async () => {
    try {
        const attractionsStatus = await AttractionsStatus.findAll();
        return {
            message: `Lista de estados`,
            status: 200,
            data: {
                attractionsStatus,
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
        const attractionsStatus = await AttractionsStatus.findOne({ where: { id } });
        if (attractionsStatus === null) {
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
                    attractionsStatus,
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
export const create = async (data: AttractionsStatusInterface) => {
    try {
        const attractionsStatus = await AttractionsStatus.create({
            ...data,
        });

        return {
            message: `Se ha creado el estado`,
            status: 200,
            data: {
                attractionsStatus,
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

export const update = async (id: number, data: AttractionsStatusInterface) => {
    try {
        const attractionsStatus = await AttractionsStatus.update(
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
                attractionsStatus,
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
export const deleted = async (id: number, data: AttractionsStatusInterface) => {
    try {
        const attractionsStatus = await AttractionsStatus.update(
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
                attractionsStatus,
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
