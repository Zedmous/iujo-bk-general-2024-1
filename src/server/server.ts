import express from "express";
import cors from "cors";

import { roleRoute, requirementsRoute,locationsRoute,componentsRoute, packagesRoute } from "../routes/index.route";
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
      packages: this.pre+ "/packages",
      requirements: this.pre+ "/requirements",
      locations: this.pre+ "/locations",
      components: this.pre+"/components"
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
    this.app.use(this.paths.locations, locationsRoute);
    this.app.use(this.paths.roles, roleRoute);
    this.app.use(this.paths.packages, packagesRoute);
    this.app.use(this.paths.requirements, requirementsRoute);
    this.app.use(this.paths.components, componentsRoute);
  }
  async connectDB() {
    //conexion a la base de datos
    await db.authenticate().then(() => {
      console.log("Conexión exitosa a la base de datos");
    }).catch((error:any)=>{
      console.log("No se pudo conectar a la base de datos")
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en localhost:${this.port}`);
    });
  }
}
