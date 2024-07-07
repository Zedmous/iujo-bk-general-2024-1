import { Sequelize } from "sequelize";
import { RoleModel, TTableModel, UserModel} from "../models";

const dbName: string | undefined = process.env.DATABASE_NAME
  ? process.env.DATABASE_NAME
  : "";
const dbPassword: string | undefined = process.env.DATABASE_PASSWORD
  ? process.env.DATABASE_PASSWORD
  : "";

// Instanciamos el objeto Sequelize
const db = new Sequelize(dbName, "root", dbPassword, {
  dialect: "mysql",
  host: "localhost",
});

// Creamos las tablas de la base de datos
const User = db.define("users", UserModel);
const Role = db.define("roles", RoleModel);
const TTable = db.define("tipo_mesa", TTableModel); // Nombre de la tabla: "tipo_mesa"

// Relaciones (modificación)
Role.hasMany(User, { foreignKey: "role_id" });
User.belongsTo(Role, { foreignKey: "role_id" });

Table.belongsTo(TTable, { foreignKey: "tipo_mesa_id" }); // Relación entre Table y TTable
TTable.hasMany(Table, { foreignKey: "tipo_mesa_id" });

// Sincroniza los modelos con la base de datos
const syncModels = async () => {
  await db.sync({ alter: true });
  try {
    // Comentado porque db.sync sincroniza todos los modelos definidos
    // await User.sync({ alter: true });
    // await Role.sync({ alter: true });
    // await TTable.sync({ alter: true }); // Tampoco necesario
  } catch (error) {
    console.error(error);
  }
};

syncModels();

export { User, Role, Table, TTable, db };
