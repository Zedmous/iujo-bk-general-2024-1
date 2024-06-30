import express from "express";
import cors from "cors";
<<<<<<< HEAD
import { roleRoute, testRoute , troomRoute } from "../routes/index.route";
=======
import { locationsRoute, testRoute, roleRoute } from "../routes/index.route";
>>>>>>> 1f6c1d21f110046bea7f744e1e07c14d3b118216
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
<<<<<<< HEAD
      roles: this.pre+ "/roles",
      troom: this.pre+ "/troom"
=======
      locations: this.pre+ "/locations",
      roles: this.pre+ "/roles"
>>>>>>> 1f6c1d21f110046bea7f744e1e07c14d3b118216
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
<<<<<<< HEAD
    this.app.use(this.paths.troom, troomRoute);
=======
    this.app.use(this.paths.locations, locationsRoute);
>>>>>>> 1f6c1d21f110046bea7f744e1e07c14d3b118216
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
