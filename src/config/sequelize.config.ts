import { Sequelize } from "sequelize";
import { RoleModel, UserModel, SupplierModel } from "../models";

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

const UserDB = db.define('users',UserModel);
const RoleDB = db.define('roles',RoleModel);
const SupplierDB = db.define('supplier',SupplierModel);
// Relaciones
RoleDB.hasMany(UserDB, { foreignKey: 'role_id' });
UserDB.belongsTo(RoleDB, { foreignKey: 'role_id' });

// Sincroniza los modelos con la base de datos
const syncModels = async () => {
  await db.sync({ alter: true });
  try {

  } catch (error) {
    console.error(error);
  }
};

syncModels();
//export default db;
export  { UserDB, RoleDB, SupplierDB,  db };
