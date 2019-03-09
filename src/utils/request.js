export function urlParamify(params = {}) {
  const urlValues = Object.keys(params).reduce((urlParams, k) => {
    if (Array.isArray(params[k])) {
      params[k].forEach(value => {
        if (value !== undefined) {
          urlParams.append(k, value)
        }
      })
    } else if (params[k] !== undefined) {
      urlParams.append(k, params[k])
    }
    return urlParams
  }, new URLSearchParams())

  return urlValues.toString()
}

export function formDataify(params = {}) {
  return Object.keys(params).reduce((data, k) => {
    if (Array.isArray(params[k])) {
      params[k].forEach(value => data.append(`${k}[]`, value))
    } else {
      data.append(k, params[k])
    }
    return data
  }, new FormData())
}

/**
 * Parses body returned by a network request
 */
function parseResponse(response, type = "json") {
  const contentType = response.headers.get("content-type")
  switch (type) {
    case "json": {
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json()
      }
      console.warn("Non JSON response!") // eslint-disable-line
      return response.text()
    }
    case "blob":
      return response.blob()
    default:
      return response.text()
  }
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response, type) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  return parseResponse(response, type).then(body => {
    const error = new Error(response.statusText || `${response.status} error`)
    // eslint-disable-next-line
    error.response = response
    // eslint-disable-next-line
    error.responseBody = body
    throw error
  })
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options, responseType = "json") {
  return fetch(url, options)
    .then(response => checkStatus(response, responseType))
    .then(response => parseResponse(response, responseType))
}
