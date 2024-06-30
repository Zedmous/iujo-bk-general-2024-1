import { Sequelize } from "sequelize";
import { TTransport } from "../models"; 

const dbName: string | undefined = process.env.DATABASE_NAME
  ? process.env.DATABASE_NAME
  : "";
const dbPassword: string | undefined = process.env.DATABASE_PASSWORD
  ? process.env.DATABASE_PASSWORD
  : "";

  //instanciamos el obejto sequelize
const dbTransports = new Sequelize(dbName, "root", dbPassword, {
  dialect: "mysql",
  host: "localhost",
});

//CREAMOS LAS TABLAS DE LA BASE DE DATOS
const tipTransport = dbTransports.define('tiptransport',TTransport);

// Relaciones


// Sincroniza los modelos con la base de datos
const syncModels = async () => {
  await dbTransports.sync({ alter: true });
  try {
    //await User.sync({ alter: true });
    //await Role.sync({ alter: true });
  } catch (error) {
    console.error(error);
  }
};

syncModels();
//export default db;
export  { tipTransport,  dbTransports };
