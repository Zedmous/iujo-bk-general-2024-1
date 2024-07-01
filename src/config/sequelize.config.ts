import { Sequelize } from "sequelize";
import { RoleModel, TableModel, UserModel} from "../models";

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
const Table = db.define('table',TableModel)
// Relaciones
Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });
//Table.belongsTo(tipoMesa, {foreingKey: 'tipoMesaId'})
//tipoMesa.hasMany(Table, foreingKey: 'tipoMesaID')
//falta la tabla tipo de mesa asi que mientras hice una
//relacion improvisada para tener una idea (cabe destacar que 
//debe hacerce con el patron ya establecido en el ejemplo de roles)

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
export  { User, Role, Table,  db };
