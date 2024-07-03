import { Sequelize } from "sequelize";
import { ProductModel, RoleModel, UserModel } from "../models";
import { product_categoriesModel } from "../models/product_categories.model";

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
const Product = db.define('products',ProductModel);
const product_categories = db.define('product_categories',product_categoriesModel);

// Relaciones
Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

product_categories.hasMany(Product, { foreignKey: 'product_categories' });

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
export  { 
  User,
   Role, 
   product_categories,
   Product,
   db 
  };
