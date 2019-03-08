import { curry } from "ramda"
/**
 * @param fields {Object} key -> value
 * @param validators {Object} key -> validation function, should return string error, or null if valid
 * @returns {null|Object} null if no errors else object key -> error message
 */

export function validateFields(fields, validators) {
  const errors = Object.entries(validators).reduce(
    (errors, [key, validator]) => {
      const error = validator(fields[key], fields)
      if (error) {
        return {
          ...errors,
          [key]: error
        }
      }
      return errors
    },
    {}
  )
  return Object.keys(errors).length ? errors : null
}

export const required = curry((error, value) => {
  if (!value) {
    return error
  }
})
