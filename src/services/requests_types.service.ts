import { RequestTypeDB} from './../config'
import type { RequestTypeInterface} from './../interfaces'

export default class RequestsTypesService {
  async findAll() {
    try {
      const requestsTypes = await RequestTypeDB.findAll()

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
      const requestType = await RequestTypeDB.findOne({ where: { id } })

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
      const requestType = await RequestTypeDB.create({ ...data })

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
      await RequestTypeDB.update(
        { ...data },
        { where: { id }, returning: true }
      )

      const requestType = await RequestTypeDB.findOne({ where: { id } })

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
      const requestType = await RequestTypeDB.findOne({ where: { id } })

      if (requestType === null) {
        return {
          message: 'Oops! Request Type not found!',
          status: 404,
          data: null
        }
      } else {
        await RequestTypeDB.destroy({ where: { id } })

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
