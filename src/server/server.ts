import express from "express";
import cors from "cors";
import { roleRoute, testRoute, chargeRoute , conceptRoute, departmentRoute } from "../routes/index.route";
import { db } from "../config/sequelize.config";


export class Server {
  private app: any;
  private port: string | number;
  private pre: string;
  private paths: any;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3800;
    this.pre = "/api";
    this.paths = {
      tests: this.pre + "/tests",
      //users: this.pre+ "/users"
      charge: this.pre + "/charge",
      concept: this.pre + "/concept",
      department: this.pre + "/department",
      roles: this.pre+ "/roles"
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
    //const { testRoute, conceptRoute, roleRoute } = routes;
    this.app.use(this.paths.charge, chargeRoute);
    this.app.use(this.paths.concept, conceptRoute);
    this.app.use(this.paths.department, departmentRoute);
    //this.app.use(this.paths.tests, testRoute );
    this.app.use(this.paths.roles, roleRoute);
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
