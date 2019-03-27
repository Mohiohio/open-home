import { addAction, addFilter } from "../../utils/hooks"
import request from "../../utils/request"
// import addRoute from "../../utils/addRoute"

const IS_LOCALHOST = window.location.origin.indexOf("localhost") > -1
const SAVE_ENDPOINT = IS_LOCALHOST
  ? "https://www.myproperties.mohiohio.com"
  : window.location.origin.replace("open-home", "www")

const requestDefaults = {
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  },
  method: "GET"
}

if (SAVE_ENDPOINT) {
  addAction("save-details", data => {
    request(`${SAVE_ENDPOINT}/open-home`, {
      ...requestDefaults,
      method: "POST",
      body: JSON.stringify(data)
    })
  })

  addFilter("load-responses", () => {
    return request(`${SAVE_ENDPOINT}/open-home/detail`, requestDefaults)
  })

  addFilter("is-authenticated", () => {
    return request(`${SAVE_ENDPOINT}/open-home`, requestDefaults)
      .then(res => !!res.user_id)
      .catch(e => {
        if (e.response && e.response.status === 401) {
          return IS_LOCALHOST
        }
        throw e
      })
  })
} else {
  console.warn("No save endpoint")
}
