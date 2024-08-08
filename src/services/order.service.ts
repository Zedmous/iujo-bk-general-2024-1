import { OrderDB, OrderDetailProductDB, ProductDB } from "../config";
import { OrderInterface, OrderProductDetailInterface } from "../interfaces";


export const getAll = async () => {
  try {
    const orders = await OrderDB.findAll({
      include: [
        {
          model: ProductDB,
          as: 'order_products',
          attributes: ['name', 'product_category_id', 'price', 'cost'], // Atributos específicos de ProductDB
          through: {
            attributes: ['price', 'amount', 'description'] // Atributos específicos de la tabla intermedia OrderDetailProduct
          }
        }
      ],
      attributes: ['id', 'supplier_id', 'status', 'createdAt'] // Atributos específicos de OrderDB 
    });
    return {
      message: `All orders successful found`,
      status: 200,
      data: {
        orders,
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



export const getOne = async (id: number|string) => {
  try {
    //consultas a la base de datos van aca
    const orders = await OrderDB.findOne({ 
      where: { id },
      include: [
        {
          model: ProductDB,
          as: 'order_products',
          attributes: ['name', 'product_category_id', 'price', 'cost'], // Atributos específicos de ProductDB
          through: {
            attributes: ['price', 'amount', 'description'] // Atributos específicos de la tabla intermedia OrderDetailProduct
          }
        }
      ],
      attributes: ['id', 'supplier_id', 'status', 'createdAt'] // Atributos específicos de OrderDB 
    }); 
    if (orders === null) {
      console.log("Not Found");
      return {
        message: `Order not found`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Order found`,
        status: 200,
        data: {
          orders,
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
export const create = async (data: OrderInterface) => {
  try {
    //Becareful here because im defining that details can be undefined, but in reality because of the validation middleware it will never be undefined, but i did it in this way to avoid a typing error   
    const details:Array<OrderProductDetailInterface> | undefined = data['order_details'];
    const resultTransaction = await OrderDB.sequelize?.transaction(async (t) => {

      const order = await OrderDB.create({
        ...data,
      }, { transaction: t });

      
      const orderDetailProduct = details!.map((detail) => {
        return {
          ...detail,
          order_id: order.id,
        };
      });
      console.log(orderDetailProduct);


      await OrderDetailProductDB.bulkCreate(orderDetailProduct, { transaction: t });
      return {
        order,
        orderDetailProduct,
      }
    })

    return {
      message: `Order creation successful`,
      status: 200,
      data: {
        order: resultTransaction?.order,
        orderDetailProduct: resultTransaction?.orderDetailProduct,
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

export const update = async (id: number|string, data: OrderInterface) => {
  try {
    //consultas a la base de datos van aca
    const orders = await OrderDB.update(
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
      message: `Successful order updated`,
      status: 200,
      data: {
        orders,
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
export const deleted = async (id: number|string, data: OrderInterface) => {
  try {
    //consultas a la base de datos van aca
    const orders = await OrderDB.update(
      {
        status: "deleted",
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
      message: `Successful order deleted`,
      status: 200,
      data: {
        orders,
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