import { Account  } from "../config";
import { AccountInterface } from "../interfaces";

export const getAll = async () => 
{
    try {
        const accounts = await Account.findAll();
        return {
        message: `Account All Successful`,
        status: 200,
        data: 
        {
            accounts,
        },
        };
    }   // Here End Try 
    catch (error) 
    {
        console.log(error);
        return {
        message: `Contact the administrator: error`,
        status: 500,
        };
    }   // Here End Catch
}   // Here End getAll

export const getOne = async (id: number) => 
{
    try 
    {
        const account = await Account.findOne({ where: { id } }); // Find Account with id
        if (account === null) 
        {
            console.log("Not found");
            return {
            message: `Account not found`,
            status: 404,
            data: 
            {
            },
            };
        } 
        else 
        {
            return {
            message: `Account found`,
            status: 200,
            data: 
            {
                account,
            },
            };
        }
    }   // Here End Try 
    catch (error) 
    {
        console.log(error);
        return {
        message: `Contact the administrator: error`,
        status: 500,
        };
    }   // Here End Catch
}   // Here End getOne

export const create = async (data: AccountInterface) => 
{
    try 
    {
        const account = await Account.create({...data});
        return {
        message: `Account created successfully`,
        status: 200,
        data: 
        {
            account,
        },
        };
    }   // Here End Try 
    catch (error) 
    {
        console.log(error);
        return {
        message: `Contact the administrator: error`,
        status: 500,
        };
    }   // Here End Catch
}   // Here End create

export const update = async (id: number, data: AccountInterface) => 
{
    try 
    {
        const account = await Account.update(data, { where: { id } });
        return {
        message: `Account updated successfully`,
        status: 200,
        data: 
        {
            account,
        },
        };
    }   // Here End Try 
    catch (error) 
    {
        console.log(error);
        return {
        message: `Contact the administrator: error`,
        status: 500,
        };
    }   // Here End Catch
}   // Here End update

export const deleted = async (id: number) => 
{
    try 
    {
        const account = await Account.destroy({ where: { id } });
        return {
        message: `Account deleted successfully`,
        status: 200,
        data: 
        {
            account,
        },
        };
    }   // Here End Try 
    catch (error) 
    {
        console.log(error);
        return {
        message: `Contact the administrator: error`,
        status: 500,
        };
    }   // Here End Catch
}   // Here End deleted