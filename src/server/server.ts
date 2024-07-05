import express from "express";
import cors from "cors";
import { roleRoute, testRoute, requirementsRoute,locationsRoute, AttractionsStatusRoute } from "../routes/index.route";
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
      tests: this.pre + "/tests",
      roles: this.pre + "/roles",
      attractionStatus: this.pre + "/attractionstatus",
      requirements: this.pre+ "/requirements",
      locations: this.pre+ "/locations",
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
    //this.app.use(this.paths.tests, testRoute );
    this.app.use(this.paths.locations, locationsRoute);
    this.app.use(this.paths.roles, roleRoute);
    this.app.use(this.paths.attractionStatus, AttractionsStatusRoute)
    this.app.use(this.paths.requirements, requirementsRoute);
  }
  async connectDB() {
    //conexion a la base de datos
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
