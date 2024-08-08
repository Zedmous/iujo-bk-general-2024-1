import express from "express";
import cors from "cors";
import {
  roleRoute,
  requirementRoute,
  locationRoute,
  attractionStatusRoute,
  conceptRoute,
  supplierRoute,
  userRoute,
  productCategoryRoute,
  inventoryRoute,
  customerRoute,
  areaRoute,
  staffRoute,
  tableRoute,
  tableTypeRoute,
  roomTypeRoute,
  transportTypeRoute,
  productRoute,
  orderRoute,
} from "../routes/index.route";

import { db } from "../config/sequelize.config";
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
      areas: this.pre + "/areas",
      attractions_statuses: this.pre + "/attractions_statuses",
      concepts: this.pre + "/concepts",
      customers: this.pre + "/customers",
      inventories: this.pre + "/inventories",
      locations: this.pre + "/locations",
      product_categories: this.pre + "/product_categories",
      products: this.pre+ "/products",
      requirements: this.pre + "/requirements",
      room_types: this.pre + "/room_types",
      roles: this.pre + "/roles",
      staffs: this.pre + "/staffs",
      suppliers: this.pre + "/suppliers",
      tables: this.pre + "/tables",
      table_types: this.pre + "/table_types",
      transport_types: this.pre+ "/transport_types",
      users: this.pre + "/users",
      orders: this.pre + "/orders",

    };

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.areas, areaRoute);
    this.app.use(this.paths.attractions_statuses, attractionStatusRoute);
    this.app.use(this.paths.concepts, conceptRoute);
    this.app.use(this.paths.customers, customerRoute);
    this.app.use(this.paths.inventories, inventoryRoute);
    this.app.use(this.paths.locations, locationRoute);
    this.app.use(this.paths.product_categories, productCategoryRoute);
    this.app.use(this.paths.products, productRoute);
    this.app.use(this.paths.requirements, requirementRoute);
    this.app.use(this.paths.roles, roleRoute);
    this.app.use(this.paths.room_types, roomTypeRoute);
    this.app.use(this.paths.staffs, staffRoute);
    this.app.use(this.paths.suppliers, supplierRoute);
    this.app.use(this.paths.transport_types, transportTypeRoute);
    this.app.use(this.paths.table_types, tableTypeRoute);
    this.app.use(this.paths.tables, tableRoute);
    this.app.use(this.paths.users, userRoute);
    this.app.use(this.paths.orders, orderRoute);
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
}
