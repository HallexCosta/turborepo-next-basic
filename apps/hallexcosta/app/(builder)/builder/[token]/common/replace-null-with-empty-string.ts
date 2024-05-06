import _ from 'lodash'
import { createObjectWithDefaults } from './create-object-with-defaults'

export function replaceNullWithEmptyString(value) {
  if (_.isArray(value)) {
    return value.map((obj) => _.mapValues(obj, replaceNullWithEmptyString))
  }

  if (_.isDate(value)) {
    return value
  } else if (_.isObject(value)) {
    return createObjectWithDefaults(value)
  } else {
    return value
  }
}
