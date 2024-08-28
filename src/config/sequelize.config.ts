import { Sequelize } from "sequelize";

import {
  RoleModel,
  UserModel,
  SupplierModel,
  RequirementModel,
  LocationModel,
  AttractionsStatusModel,
  ConceptModel,
  InventoryModel, ProductCategoryModel,
  AttractionsModel, SchedulesAttractionsModel,
  AttractionsRequirementsModel
} from "../models";

const dbName: string | undefined = process.env.DATABASE_NAME
  ? process.env.DATABASE_NAME
  : "";
const dbPassword: string | undefined = process.env.DATABASE_PASSWORD
  ? process.env.DATABASE_PASSWORD
  : "";

const db = new Sequelize(dbName, "root", dbPassword, {
  dialect: "mysql",
  host: "localhost",
});

//CREAMOS LAS TABLAS DE LA BASE DE DATOS

const UserDB = db.define("users", UserModel);
const RoleDB = db.define("roles", RoleModel);
const ProductCategoryDB = db.define('product_categories',ProductCategoryModel);
const InventoryDB = db.define('inventories',InventoryModel);
const SupplierDB = db.define("supplier", SupplierModel);
const RequirementDB = db.define("requirements", RequirementModel);
const LocationDB = db.define("locations", LocationModel);
const ConceptDB = db.define("concepts", ConceptModel);
const AttractionsStatusDB = db.define("attractions_statuses",AttractionsStatusModel);
const AttractionsDB = db.define("attractions",  AttractionsModel);
const SchedulesAttractionsDB = db.define("schedules_attractions", SchedulesAttractionsModel);
const AttractionsRequierementsDB = db.define( "attractions_requierements", AttractionsRequirementsModel);

// Relaciones
RoleDB.hasMany(UserDB, { foreignKey: "role_id" });
UserDB.belongsTo(RoleDB, { foreignKey: "role_id" });


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

export { UserDB, RoleDB, SupplierDB, LocationDB, RequirementDB,AttractionsStatusDB, ConceptDB,
        ProductCategoryDB, InventoryDB, AttractionsModel, SchedulesAttractionsModel,
        AttractionsRequirementsModel, db };
