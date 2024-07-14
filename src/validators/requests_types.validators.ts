import { body, type ValidationChain } from 'express-validator'

export const RequestsTypesValidators = {
  validateRequestType(): ValidationChain[] {
    return [
      body('description')
        .notEmpty()
        .withMessage('Description is required')
        .isLength({ max: 256 })
        .withMessage('Description can only be 256 characters maximum')
    ]
  }
}
