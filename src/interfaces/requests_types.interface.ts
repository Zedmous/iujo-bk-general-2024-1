import { type IntegerDataTypeConstructor, type StringDataType } from 'sequelize'

export type IdType = {
  type: IntegerDataTypeConstructor
  autoIncrement: boolean
  primaryKey: boolean
}

export type DescriptionType = {
  type: StringDataType
  allowNull: boolean
  unique: boolean
}

export interface RequestsTypesModelInterface {
  id: IdType
  description: DescriptionType
}

export interface RequestsTypesInterface {
  id?: number
  description: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}
