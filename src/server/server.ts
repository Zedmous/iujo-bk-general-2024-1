import express from "express";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import {
  accountRoute,
  areaRoute,
  attractionStatusRoute,
  componentsRoute,
  conceptRoute,
  customerRoute,
  inventoryRoute,
  locationRoute,
  packagesRoute,
  productCategoryRoute,
  productRoute,
  purchaseOrderRoute,
  requestsTypesRoute,
  requirementRoute,
  roleRoute,
  roomRoute,
  roomTypeRoute,
  schedulesRoute,
  staffRoute,
  supplierRoute,
  tableRoute,
  tableTypeRoute,
  transportTypeRoute,
  userRoute,
} from "../routes/index.route";
import { db } from "../config/sequelize.config";
import { swaggerOptions } from "../config";
export class Server {
  private app: any;
  private port: string | number;
  private pre: string;
  private paths: any;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3880;
    this.pre = "/api";
    this.paths = {
      accounts: this.pre + "/accounts",
      areas: this.pre + "/areas",
      attractions_statuses: this.pre + "/attractions_statuses",
      components: this.pre + "/components",
      concepts: this.pre + "/concepts",
      customers: this.pre + "/customers",
      inventories: this.pre + "/inventories",
      locations: this.pre + "/locations",
      packages: this.pre + "/packages",
      product_categories: this.pre + "/product_categories",
      products: this.pre + "/products",
      purchase_orders: this.pre + "/purchase_orders",
      request_types: this.pre + "/request_types",
      requirements: this.pre + "/requirements",
      roles: this.pre + "/roles",
      room_types: this.pre + "/room_types",
      rooms: this.pre + "/rooms",
      schedules: this.pre + "/schedules",
      staffs: this.pre + "/staffs",
      suppliers: this.pre + "/suppliers",
      tables: this.pre + "/tables",
      table_types: this.pre + "/table_types",
      transport_types: this.pre + "/transport_types",
      type_rooms: this.pre + "/type_rooms",
      users: this.pre + "/users",
    };
    this.connectDB();
    this.middlewares();
    this.routes();
    this.swaggerSetup();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("src/public"));
  }

  routes() {
    this.app.use(this.paths.accounts, accountRoute);
    this.app.use(this.paths.areas, areaRoute);
    this.app.use(this.paths.attractions_statuses, attractionStatusRoute);
    this.app.use(this.paths.components, componentsRoute);
    this.app.use(this.paths.concepts, conceptRoute);
    this.app.use(this.paths.customers, customerRoute);
    this.app.use(this.paths.inventories, inventoryRoute);
    this.app.use(this.paths.locations, locationRoute);
    this.app.use(this.paths.packages, packagesRoute);
    this.app.use(this.paths.product_categories, productCategoryRoute);
    this.app.use(this.paths.products, productRoute);
    this.app.use(this.paths.purchase_orders, purchaseOrderRoute);
    this.app.use(this.paths.request_types, requestsTypesRoute);
    this.app.use(this.paths.requirements, requirementRoute);
    this.app.use(this.paths.roles, roleRoute);
    this.app.use(this.paths.room_types, roomTypeRoute);
    this.app.use(this.paths.rooms, roomRoute);
    this.app.use(this.paths.schedules, schedulesRoute);
    this.app.use(this.paths.staffs, staffRoute);
    this.app.use(this.paths.suppliers, supplierRoute);
    this.app.use(this.paths.table_types, tableTypeRoute);
    this.app.use(this.paths.tables, tableRoute);
    this.app.use(this.paths.transport_types, transportTypeRoute);
    this.app.use(this.paths.users, userRoute);
  }
  async connectDB() {
    await db
      .authenticate()
      .then(() => {
        console.log("Conexión exitosa a la base de datos");
      })
      .catch((error: any) => {
        console.log("No se pudo conectar a la base de datos");
      });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en localhost:${this.port}`);
    });
  }
  swaggerSetup() {
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }
}
