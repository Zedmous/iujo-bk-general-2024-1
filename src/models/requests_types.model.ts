import { INTEGER, STRING } from 'sequelize'

import {
  type RequestsTypesModelInterface,
  type IdType,
  type DescriptionType
} from './../interfaces/requests_types.interface'

export class RequestsTypesModel implements RequestsTypesModelInterface {
  public id: IdType
  public description: DescriptionType

  constructor() {
    this.id = {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true
    }

    this.description = {
      type: STRING(256),
      allowNull: false,
      unique: true
    }
  }
}
