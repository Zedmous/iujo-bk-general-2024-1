import { Sequelize } from "sequelize";
import { ProviderModel, RoleModel, ServiceModel, UserModel } from "../models";

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
const Role = db.define('roles',RoleModel);
const User = db.define('users',UserModel);
const Provider = db.define('providers',ProviderModel);
const Service = db.define('services',ServiceModel);
// Relaciones
Role.hasMany(User,{foreignKey:'role_id'});
User.belongsTo(Role,{foreignKey:'role_id'});
Provider.hasMany(Service, { foreignKey: 'idProvider' });
Service.belongsTo(Provider, { foreignKey: 'idProvider' });

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
export  { Provider, Service, Role, db };
