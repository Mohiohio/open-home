import { addAction, addFilter } from "../../utils/hooks"
import request from "../../utils/request"
// import addRoute from "../../utils/addRoute"

const SAVE_ENDPOINT = window.location.origin.indexOf("localhost")
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
} else {
  console.warn("No save endpoint")
}
