import { Sequelize } from "sequelize";


import {
  AreaModel,
  AttractionsStatusModel,
  CityModel,
  ConceptModel,
  CountryModel,
  CustomerModel,
  DishCategoryModel,
  DishModel,
  InventoryModel,
  LocationModel,
  ProductCategoryModel,
  RequirementModel,
  RoleModel,
  RoomTypeModel,
  StaffModel,
  StateModel,
  SupplierModel,
  TableOrderDetailModel,
  TableOrderModel,
  TableTypeModel,
  TableModel,
  TransportTypeModel,
  TransportModel,
  TravelModel,
  UserModel,
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




// CREAMOS LAS TABLAS EN ORDEN ALFABETICO
const AreaDB = db.define("areas", AreaModel);
const AttractionsStatusDB = db.define(
  "attractions_statuses",
  AttractionsStatusModel
);
const CityDB = db.define("cities", CityModel);
const ConceptDB = db.define("concepts", ConceptModel);
const CountryDB = db.define("countries", CountryModel);
const CustomerDB = db.define("customers", CustomerModel);
const DishCategoryDB = db.define("dish_categories", DishCategoryModel);
const DishDB = db.define("dishes", DishModel);
const InventoryDB = db.define("inventories", InventoryModel);
const LocationDB = db.define("locations", LocationModel);
const ProductCategoryDB = db.define("product_categories", ProductCategoryModel);
const RequirementDB = db.define("requirements", RequirementModel);
const RoleDB = db.define("roles", RoleModel);
const RoomTypeDB = db.define("room_types", RoomTypeModel);
const StaffDB = db.define('staffs',StaffModel);
const StateDB = db.define('states',StateModel);
const SupplierDB = db.define("suppliers", SupplierModel);
const TableOrderDetailDB = db.define('table_order_details',TableOrderDetailModel);
const TableOrderDB = db.define('table_orders',TableOrderModel);
const TableTypeDB = db.define("table_types", TableTypeModel);
const TableDB = db.define('tables',TableModel);
const TransportTypeDB = db.define('transport_types',TransportTypeModel);
const TransportDB = db.define('transports',TransportModel);
const TravelDB = db.define('travel',TravelModel);
const UserDB = db.define("users", UserModel);
// Relaciones iMPORTA ES EL ORDEN DE LA JERARQUIA
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
  AreaDB,
  AttractionsStatusDB,
  CityDB,
  ConceptDB,
  CountryDB,
  CustomerDB,
  DishCategoryDB,
  DishDB,
  InventoryDB,
  LocationDB,
  ProductCategoryDB,
  RequirementDB,
  RoleDB,
  RoomTypeDB,
  StaffDB,
  StateDB,
  SupplierDB,
  TableOrderDetailDB,
  TableOrderDB,
  TableTypeDB,
  TableDB,
  TransportTypeDB,
  TransportDB,
  TravelDB,
  UserDB,
  db,
};
