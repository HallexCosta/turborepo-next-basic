type VerifyFieldsParams = {
  name: string
  email: string
  username: string
}

interface ValidationStrategy {
  validate(fieldValue: any, fieldName: string): string | null
}

class EmptyStringValidation implements ValidationStrategy {
  validate(fieldValue: string, fieldName: string): string | null {
    return fieldValue === '' ? fieldName : null
  }
}

class EmailAddressValidation implements ValidationStrategy {
  validate(fieldValue: string, fieldName: string): string | null {
    return !fieldValue.includes('@') ? fieldName : null
  }
}

class FieldValidator {
  private strategies: Map<string, ValidationStrategy[]>

  constructor(strategies: Map<string, ValidationStrategy[]>) {
    this.strategies = strategies
  }

  validateFields(fields: Record<string, any>): {
    isValid: boolean
    invalidFields: string[]
  } {
    const invalidFields: string[] = []
    for (const fieldKey in fields) {
      if (this.strategies.has(fieldKey)) {
        const validators = this.strategies.get(fieldKey)

        if (Array.isArray(validators)) {
          for (const validator of validators) {
            const error = validator.validate(fields[fieldKey], fieldKey)
            if (error !== null) {
              invalidFields.push(error)
            }
          }
        }
      }
    }
    return {
      isValid: invalidFields.length === 0,
      invalidFields
    }
  }
}

export const isValidFields = (fields: VerifyFieldsParams) => {
  const strategies = new Map<string, ValidationStrategy[]>([
    ['name', [new EmptyStringValidation()]],
    ['email', [new EmailAddressValidation()]],
    ['username', [new EmptyStringValidation()]],
    ['summary', [new EmptyStringValidation()]],
    ['skills', [new EmptyStringValidation()]]
  ])

  const validator = new FieldValidator(strategies)
  const result = validator.validateFields(fields)
  return result
}
