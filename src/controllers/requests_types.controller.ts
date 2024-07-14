import { type Request, type Response } from 'express'
import RequestsTypesService from './../services/requests_types.service'

const service = new RequestsTypesService()

export const RequestsTypesController = {
  findAll: async (_req: Request, res: Response) => {
    const { status, message, data } = await service.findAll()
  
    return res.status(status).json({ message, data })
  },
  findOne: async ({ params }: Request, res: Response) => {
    const { id } = params
    const { status, message, data } = await service.findOne(+id)
  
    return res.status(status).json({ message, data })
  },
  create: async ({ body }: Request, res: Response) => {
    const { status, message, data } = await service.create(body)
  
    return res.status(status).json({ message, data })
  },
  update: async ({ params, body }: Request, res: Response) => {
    const { id } = params
    const { status, message, data } = await service.update(+id, body)
  
    return res.status(status).json({ message, data })
  },
  delete: async ({ params }: Request, res: Response) => {
    const { id } = params
    const { status, message, data } = await service.delete(+id)
  
    return res.status(status).json({ message, data })
  }
}
