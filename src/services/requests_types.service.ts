import { RequestTypesDb } from './../config'
import type { RequestTypeInterface} from './../interfaces'

export default class RequestsTypesService {
  async findAll() {
    try {
      const requestsTypes = await RequestTypesDb.findAll()

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
      const requestType = await RequestTypesDb.findOne({ where: { id } })

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

  async create(data: RequestTypeInterface) {
    try {
      const requestType = await RequestTypesDb.create({ ...data })

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

  async update(id: number, data: RequestTypeInterface) {
    try {
      await RequestTypesDb.update(
        { ...data },
        { where: { id }, returning: true }
      )

      const requestType = await RequestTypesDb.findOne({ where: { id } })

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
      const requestType = await RequestTypesDb.findOne({ where: { id } })

      if (requestType === null) {
        return {
          message: 'Oops! Request Type not found!',
          status: 404,
          data: null
        }
      } else {
        await RequestTypesDb.destroy({ where: { id } })

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
