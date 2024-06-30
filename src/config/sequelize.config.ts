import { Sequelize } from "sequelize";
<<<<<<< HEAD
import { RoleModel, UserModel, TroomModel } from "../models";

=======
import { locationsModel, RoleModel, UserModel } from "../models";
>>>>>>> 1f6c1d21f110046bea7f744e1e07c14d3b118216

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

// ... other code (database connection setup)

const Locations = db.define('locations', locationsModel);

// Sync the Locations model to create the table
Locations.sync();

const User = db.define('users',UserModel);
const Role = db.define('roles',RoleModel);
const Troom = db.define('troom',TroomModel)
// Relaciones
Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

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
<<<<<<< HEAD
export  { User, Role, Troom, db };
=======

export { Locations,User, Role, db };
>>>>>>> 1f6c1d21f110046bea7f744e1e07c14d3b118216
