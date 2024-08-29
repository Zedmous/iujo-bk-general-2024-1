import { DataTypes } from "sequelize";

const supplier_service_order_details = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  purchase_order_id: {
    type: DataTypes.INTEGER,
  },
  service_supplier_id: {
    type: DataTypes.INTEGER,
  },

};

export { InventoryModel };
