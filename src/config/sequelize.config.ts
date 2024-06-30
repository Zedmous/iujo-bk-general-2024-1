import { Sequelize } from "sequelize";
import {locationsModel, RoleModel, UserModel, TroomModel} from "../models";
import {RoomsModel} from "../models/rooms.models"

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
const Troom = db.define('troom',TroomModel);
const Room = db.define('rooms',RoomsModel);
// Relaciones
Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

Troom.hasMany(Room, {foreignKey: 'type_id'});
Room.belongsTo(Troom, {foreignKey: 'type_id'});

Locations.hasMany(Room, {foreignKey: 'location_id'});
Room.belongsTo(Locations, {foreignKey: 'location_id'});



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

export  {Locations,User, Role, Troom, Room, db };
