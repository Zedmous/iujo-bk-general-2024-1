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
  TransportTypeModel,
  ComponentsModel,
  PackageModel,
  AdvancementModel,
  CityModel,
  ComponentPackageModel,
  CountryCodeModel,
  CountryModel,
  CustomerPackageModel,
  LanguageModel,
  PermissionsModel,
  ReservationModel,
  StateModel,
  SpecialAccessModel,
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
const AdvancementsDB = db.define("advancements", AdvancementModel);
const AreaDB = db.define("areas", AreaModel);
const AttractionsStatusDB = db.define(
  "attractions_statuses",
  AttractionsStatusModel
);
const CityDB = db.define("cities", CityModel);
const ComponentPackageDB = db.define("concepts", ComponentPackageModel);
const ComponentDB = db.define("components", ComponentsModel);
const ConceptDB = db.define("concepts", ConceptModel);
const CountryCodeDB = db.define("country_codes", CountryCodeModel);
const CountryDB = db.define("countries", CountryModel);
const CustomerPackageDB = db.define("customer_packages", CustomerPackageModel);
const CustomerDB = db.define("customers", CustomerModel);
const InventoryDB = db.define("inventories", InventoryModel);
const LanguageDB = db.define("languages", LanguageModel);
const LocationDB = db.define("locations", LocationModel);
const PackageDB = db.define("packages", PackageModel);
const PermissionDB = db.define("permissions", PermissionsModel);
const ProductCategoryDB = db.define("product_categories", ProductCategoryModel);
const RequirementDB = db.define("requirements", RequirementModel);
const ReservationDB = db.define("reservations", ReservationModel);
const RoleDB = db.define("roles", RoleModel);
const RoomTypeDB = db.define("room_types", RoomTypeModel);
const SpecialAccessDB = db.define("special_access", SpecialAccessModel);
const StaffDB = db.define("staffs", StaffModel);
const StateDB = db.define("states", StateModel);
const SupplierDB = db.define("suppliers", SupplierModel);
const TableTypeDB = db.define("table_types", TableTypeModel);
const TableDB = db.define("tables", TableModel);
const TransportTypeDB = db.define("transport_types", TransportTypeModel);
const UserDB = db.define("users", UserModel);

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
  AdvancementsDB,
  AreaDB,
  AttractionsStatusDB,
  CityDB,
  ComponentPackageDB,
  ComponentDB,
  ConceptDB,
  CountryCodeDB,
  CountryDB,
  CustomerPackageDB,
  CustomerDB,
  InventoryDB,
  LanguageDB,
  LocationDB,
  PackageDB,
  PermissionDB,
  ProductCategoryDB,
  RequirementDB,
  ReservationDB,
  RoleDB,
  RoomTypeDB,
  SpecialAccessDB,
  StaffDB,
  StateDB,
  SupplierDB,
  TableTypeDB,
  TableDB,
  TransportTypeDB,
  UserDB,
  db,
};
