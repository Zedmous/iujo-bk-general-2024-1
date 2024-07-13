import { Sequelize } from "sequelize";


import {
  RoleModel,
  UserModel,
  SupplierModel,
  RequirementModel,
  LocationModel,
  AttractionsStatusModel,
  ConceptModel,
  InventoryModel,
  ProductCategoryModel,
  CustomerModel,
  RoomTypeModel,
  AreaModel,
  StaffModel,
  TableModel,
  TableTypeModel,
  TransportTypeModel
} from "../models";

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




// CREAMOS LAS TABLAS
const UserDB = db.define("users", UserModel);
const RoleDB = db.define("roles", RoleModel);
const ProductCategoryDB = db.define("product_categories", ProductCategoryModel);
const InventoryDB = db.define("inventories", InventoryModel);
const SupplierDB = db.define("suppliers", SupplierModel);
const RequirementDB = db.define("requirements", RequirementModel);
const LocationDB = db.define("locations", LocationModel);
const ConceptDB = db.define("concepts", ConceptModel);
const AttractionsStatusDB = db.define(
  "attractions_statuses",
  AttractionsStatusModel
);
const CustomerDB = db.define("customers", CustomerModel);
const RoomTypeDB = db.define("room_types", RoomTypeModel);
const AreaDB = db.define("areas", AreaModel);
const StaffDB = db.define('staffs',StaffModel);
const TableDB = db.define('tables',TableModel);
const TableTypeDB = db.define("table_types", TableTypeModel);
const TransportTypeDB = db.define('transport_types',TransportTypeModel);
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
export {
  UserDB,
  RoleDB,
  SupplierDB,
  LocationDB,
  RequirementDB,
  AttractionsStatusDB,
  ConceptDB,
  ProductCategoryDB,
  InventoryDB,
  CustomerDB,
  RoomTypeDB,
  AreaDB,
  StaffDB,
  TableDB,
  TableTypeDB,
  TransportTypeDB,
  db,
};
