import { addAction, addFilter } from "../utils/hooks"
import request from "../utils/request"

const SAVE_ENDPOINT = process.env.SAVE_ENDPOINT
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
