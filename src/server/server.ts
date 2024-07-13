import express from "express";
import cors from "cors";
import { roleRoute, requirementRoute,locationRoute, attractionStatusRoute,conceptRoute,supplierRoute,userRoute,productCategoryRoute, inventoryRoute, customerRoute, typeRoomRoute,areaRoute,staffRoute  } from "../routes/index.route";


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
      roles: this.pre+ "/roles",
      areas: this.pre + "/area",
      requirements: this.pre+ "/requirements",
      locations: this.pre+ "/locations",
      suppliers: this.pre+ "/suppliers",
      users: this.pre+ "/users",
      attractions_statuses: this.pre + "/attractions_statuses",
      concepts: this.pre+ "/concepts",
      product_categories: this.pre+ "/product_categories",
      inventories: this.pre+ "/inventories",
      customers: this.pre+ "/customers",
      type_rooms: this.pre+ "/type_rooms",
      staff: this.pre+ "/staff",
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
    this.app.use(this.paths.roles, roleRoute);
    this.app.use(this.paths.requirements, requirementRoute);
    this.app.use(this.paths.locations, locationRoute);
    this.app.use(this.paths.suppliers, supplierRoute);
    this.app.use(this.paths.users, userRoute);
    this.app.use(this.paths.attractions_statuses, attractionStatusRoute);
    this.app.use(this.paths.concepts, conceptRoute);
    this.app.use(this.paths.product_categories, productCategoryRoute);
    this.app.use(this.paths.inventories, inventoryRoute);
    this.app.use(this.paths.customers, customerRoute);
    this.app.use(this.paths.type_rooms, typeRoomRoute);
    this.app.use(this.paths.areas, areaRoute);
    this.app.use(this.paths.staff, staffRoute);
  }
  async connectDB() {
    await db.authenticate().then(() => {
      console.log("Conexión exitosa a la base de datos");
    }).catch((error: any) => {
      console.log("No se pudo conectar a la base de datos")
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en localhost:${this.port}`);
    });
  }
}
