import { Sequelize } from "sequelize";
import {
  AccountModel,
  AdvancementModel,
  AreaModel,
  AttractionsModel,
  AttractionsRequirementsModel,
  AttractionsStatusModel,
  CityModel,
  ComponentPackageModel,
  ComponentsModel,
  ConceptModel,
  CountryCodeModel,
  CountryModel,
  CustomerModel,
  CustomerPackageModel,
  DishCategoryModel,
  DishModel,
  InventoryModel,
  LanguageModel,
  LocationModel,
  PackageModel,
  PermissionsModel,
  ProductCategoryModel,
  ProductModel,
  PurchaseOrderModel,
  RequestTypesModel,
  RequirementModel,
  ReservationModel,
  RoleModel,
  RoomModel,
  RoomTypeModel,
  SchedulesAttractionsModel,
  SchedulesModel,
  SpecialAccessModel,
  StateModel,
  StaffModel,
  SupplierModel,
  TableModel,
  TableOrderDetailModel,
  TableOrderModel,
  TableTypeModel,
  TransportModel,
  TransportTypeModel,
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

// CREAMOS LAS TABLAS

db.authenticate()
  .then(() => console.log('Conexión establecida exitosamente.'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

// CREAMOS LAS TABLAS EN ORDEN ALFABETICO
const AccountDB = db.define('accounts', AccountModel);
const AdvancementsDB = db.define("advancements", AdvancementModel);
const AreaDB = db.define("areas", AreaModel);
const AttractionsDB = db.define("attractions", AttractionsModel);
const AttractionRequirementDB = db.define(
  "attractions_requirements",
  AttractionsRequirementsModel
);
const AttractionsStatusDB = db.define(
  "attractions_statuses",
  AttractionsStatusModel
);
const CityDB = db.define("cities", CityModel);
const ComponentDB = db.define("components", ComponentsModel);
const ComponentPackageDB = db.define("component_packages", ComponentPackageModel);
const ConceptDB = db.define("concepts", ConceptModel);
const CountryCodeDB = db.define("country_codes", CountryCodeModel);
const CountryDB = db.define("countries", CountryModel);
const CustomerDB = db.define("customers", CustomerModel);
const CustomerPackageDB = db.define("customer_packages", CustomerPackageModel);
const DishCategoryDB = db.define("dish_categories", DishCategoryModel);
const DishDB = db.define("dishes", DishModel);
const InventoryDB = db.define("inventories", InventoryModel);
const LanguageDB = db.define("languages", LanguageModel);
const LocationDB = db.define("locations", LocationModel);
const PackageDB = db.define("packages", PackageModel);
const PermissionDB = db.define("permissions", PermissionsModel);
const ProductCategoryDB = db.define("product_categories", ProductCategoryModel);
const ProductDB = db.define("products", ProductModel);
const PurchaseOrderDB = db.define("purchase_orders", PurchaseOrderModel);
const RequestTypeDB = db.define("request_types", RequestTypesModel);
const RequirementDB = db.define("requirements", RequirementModel);
const ReservationDB = db.define("reservations", ReservationModel);
const RoleDB = db.define("roles", RoleModel);
const RoomDB = db.define("rooms", RoomModel);
const RoomTypeDB = db.define("room_types", RoomTypeModel);
const SchedulesAttractionsDB = db.define(
  "schedules_attractions",
  SchedulesAttractionsModel
);
const SchedulesDB = db.define("schedules", SchedulesModel);
const SpecialAccessDB = db.define("special_access", SpecialAccessModel);
const StateDB = db.define("states", StateModel);
const StaffDB = db.define("staffs", StaffModel);
const SupplierDB = db.define("suppliers", SupplierModel);
const TableDB = db.define("tables", TableModel);
const TableOrderDB = db.define("table_orders", TableOrderModel);
const TableOrderDetailDB = db.define(
  "table_order_details",
  TableOrderDetailModel
);
const TableTypeDB = db.define("table_types", TableTypeModel);
const TransportDB = db.define("transports", TransportModel);
const TransportTypeDB = db.define("transport_types", TransportTypeModel);
const TravelDB = db.define("travel", TravelModel);
const UserDB = db.define("users", UserModel);
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
  AccountDB,
  AdvancementsDB,
  AreaDB,
  AttractionsDB,
  AttractionRequirementDB,
  AttractionsStatusDB,
  CityDB,
  ComponentDB,
  ComponentPackageDB,
  ConceptDB,
  CountryCodeDB,
  CountryDB,
  CustomerDB,
  CustomerPackageDB,
  DishCategoryDB,
  DishDB,
  InventoryDB,
  LanguageDB,
  LocationDB,
  PackageDB,
  PermissionDB,
  ProductCategoryDB,
  ProductDB,
  PurchaseOrderDB,
  RequestTypeDB,
  RequirementDB,
  ReservationDB,
  RoleDB,
  RoomDB,
  RoomTypeDB,
  SchedulesAttractionsDB,
  SchedulesDB,
  SpecialAccessDB,
  StateDB,
  StaffDB,
  SupplierDB,
  TableDB,
  TableOrderDB,
  TableOrderDetailDB,
  TableTypeDB,
  TransportDB,
  TransportTypeDB,
  TravelDB,
  UserDB,
  db,
};
