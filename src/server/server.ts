import express from "express";
import cors from "cors";
import { roleRoute, productRoute, product_categoriesRoute, testRoute } from "../routes/index.route";
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
      roles: this.pre+ "/roles",
      product_categories: this.pre+ "/product_categories",
      products: this.pre+ "/products"
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
    this.app.use(this.paths.roles, roleRoute);
    this.app.use(this.paths.products, productRoute);
    this.app.use(this.paths.product_categoriess, product_categoriesRoute);
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
