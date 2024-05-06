import _ from 'lodash'
import { replaceNullWithEmptyString } from './replace-null-with-empty-string'

export function createObjectWithDefaults(obj) {
  return _.mapValues(obj, replaceNullWithEmptyString)
}
