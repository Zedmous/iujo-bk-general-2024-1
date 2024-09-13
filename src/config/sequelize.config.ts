import { Sequelize } from "sequelize";
import { RoleModel, UserModel, ChargeModel, ConceptModel, DepartmentModel, DetailModel } from "../models";

const dbName: string | undefined = process.env.DATABASE_NAME
  ? process.env.DATABASE_NAME
  : "";
const dbPassword: string | undefined = process.env.DATABASE_PASSWORD
  ? process.env.DATABASE_PASSWORD
  : "";

  //instanciamos el obejto sequelize
const db = new Sequelize(dbName, "root", dbPassword, {
  dialect: "mysql",
  host: "localhost",
});

//CREAMOS LAS TABLAS DE LA BASE DE DATOS

const User = db.define('users',UserModel);
const Role = db.define('roles',RoleModel);
const concept = db.define('concept',ConceptModel);
const charge = db.define('charge',ChargeModel);
const department = db.define('department',DepartmentModel);
const detail = db.define('detail',DetailModel);
// Relaciones
Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });
department.hasMany(charge, { foreignKey: 'department_id' });
charge.belongsTo(department, { foreignKey: 'department_id' });
concept.hasMany(detail, { foreignKey: 'concept_id' });
detail.belongsTo(concept, { foreignKey: 'concept_id' });
detail.hasMany(concept, { foreignKey: 'detail_id' });
concept.belongsTo(detail, { foreignKey: 'detail_id' });

// Sincroniza los modelos con la base de datos
const syncModels = async () => {
  await db.sync({ alter: true });
  try {
    //await User.sync({ alter: true });
    //await Role.sync({ alter: true });
  } catch (error) {
    console.error(error);
  }
};

syncModels();
//export default db;
export  { User, Role,  db, charge, concept, department, detail };
