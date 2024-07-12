import { TypeRequest  } from "../config";
import { TypeRequestInterface } from "../interfaces";

export const getAll = async () => 
{
    try {
        const requests = await TypeRequest.findAll();
        return {
        message: `Account All Successful`,
        status: 200,
        data: 
        {
            requests,
        },
        };
    }   
    catch (error) 
    {
        console.log(error);
        return {
        message: `Contact the administrator: error`,
        status: 500,
        };
    }   
}   

export const getOne = async (id: number) => 
{
    try 
    {
        const requests = await TypeRequest.findOne({ where: { id } }); 
        if (requests === null) 
        {
            console.log("Not found");
            return {
            message: `TypeRequest not found`,
            status: 404,
            data: 
            {
            },
            };
        } 
        else 
        {
            return {
            message: `TypeRequest found`,
            status: 200,
            data: 
            {
                requests,
            },
            };
        }
    }   
    catch (error) 
    {
        console.log(error);
        return {
        message: `Contact the administrator: error`,
        status: 500,
        };
    }   
}   

export const create = async (data: TypeRequestInterface) => 
{
    try 
    {
        const requests = await TypeRequest.create({...data});
        return {
        message: `TypeRequest created successfully`,
        status: 200,
        data: 
        {
            requests,
        },
        };
    }   
    catch (error) 
    {
        console.log(error);
        return {
        message: `Contact the administrator: error`,
        status: 500,
        };
    }   
}   
export const update = async (id: number, data: TypeRequestInterface) => 
{
    try 
    {
        const account = await TypeRequest.update(data, { where: { id } });
        return {
        message: `TypeRequest updated successfully`,
        status: 200,
        data: 
        {
            account,
        },
        };
    }  
    catch (error) 
    {
        console.log(error);
        return {
        message: `Contact the administrator: error`,
        status: 500,
        };
    }   
}   

export const deleted = async (id: number) => 
{
    try 
    {
        const account = await TypeRequest.destroy({ where: { id } });
        return {
        message: `TypeRequest deleted successfully`,
        status: 200,
        data: 
        {
            account,
        },
        };
    }   
    catch (error) 
    {
        console.log(error);
        return {
        message: `Contact the administrator: error`,
        status: 500,
        };
    }   
}   