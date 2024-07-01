import { Sequelize } from "sequelize";
import { productsModel } from "../models/products.model";
import { categoryProductsModel } from "../models/category.products.model";
import { inventaryModel } from "../models/inventary.model";
import { RoleModel, UserModel } from "../models";

const dbName: string | undefined = process.env.DATABASE_NAME
  ? process.env.DATABASE_NAME
  : "";
const dbPassword: string | undefined = process.env.DATABASE_PASSWORD
  ? process.env.DATABASE_PASSWORD
  : "";

  //instanciamos el obejto sequelize
const db = new Sequelize(dbName, "root", dbPassword, {
  dialect: "mysql",
  host: "localhost",
});

//CREAMOS LAS TABLAS DE LA BASE DE DATOS

const User = db.define('users',UserModel);
const Role = db.define('roles',RoleModel);
const Products = db.define('products',productsModel);
const Category = db.define('category_products',categoryProductsModel);
const Inventary = db.define('inventary',inventaryModel);
// Relaciones
Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

Category.hasMany(Products, { foreignKey: 'code_category' });
Products.hasMany(Inventary, { foreignKey: 'code_products' });

// Sincroniza los modelos con la base de datos
const syncModels = async () => {
  await db.sync({ alter: true });
  try {
    //await User.sync({ alter: true });
    //await Role.sync({ alter: true });
  } catch (error) {
    console.error(error);
  }
};

syncModels();
//export default db;
export  { User, Role,  db, Products, Category, Inventary };
