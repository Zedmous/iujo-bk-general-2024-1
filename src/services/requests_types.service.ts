import { RequestsTypesDb } from './../config'
import type { RequestsTypesInterface } from './../interfaces'

export default class RequestsTypesService {
  async findAll() {
    try {
      const requestsTypes = await RequestsTypesDb.findAll()

      return {
        message: 'OK',
        status: 200,
        data: { requestsTypes }
      }
    } catch (error) {
      return {
        message: `Internal Server Error\n${error}`,
        status: 500
      }
    }
  }

  async findOne(id: number) {
    try {
      const requestType = await RequestsTypesDb.findOne({ where: { id } })

      if (requestType === null) {
        return {
          message: 'Oops! Request Type not found!',
          status: 404,
          data: null
        }
      } else {
        return {
          message: 'OK',
          status: 200,
          data: { requestType }
        }
      }
    } catch (error) {
      return {
        message: `Internal Server Error\n${error}`,
        status: 500
      }
    }
  }

  async create(data: RequestsTypesInterface) {
    try {
      const requestType = await RequestsTypesDb.create({ ...data })

      return {
        message: 'OK',
        status: 200,
        data: { requestType }
      }
    } catch (error) {
      return {
        message: `Internal Server Error\n${error}`,
        status: 500
      }
    }
  }

  async update(id: number, data: RequestsTypesInterface) {
    try {
      await RequestsTypesDb.update(
        { ...data },
        { where: { id }, returning: true }
      )

      const requestType = await RequestsTypesDb.findOne({ where: { id } })

      if (requestType === null) {
        return {
          message: 'Oops! Request Type not found!',
          status: 404,
          data: null
        }
      } else {
        return {
          message: 'OK',
          status: 200,
          data: { requestType }
        }
      }
    } catch (error) {
      return {
        message: `Internal Server Error\n${error}`,
        status: 500
      }
    }
  }

  async delete(id: number) {
    try {
      const requestType = await RequestsTypesDb.findOne({ where: { id } })

      if (requestType === null) {
        return {
          message: 'Oops! Request Type not found!',
          status: 404,
          data: null
        }
      } else {
        await RequestsTypesDb.destroy({ where: { id } })

        return {
          message: 'OK',
          status: 200,
          data: null
        }
      }
    } catch (error) {
      return {
        message: `Internal Server Error\n${error}`,
        status: 500
      }
    }
  }
}
