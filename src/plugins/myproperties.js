import { addAction } from "../utils/hooks"
import request from "../utils/request"

const SAVE_ENDPOINT = process.env.SAVE_ENDPOINT

addAction("save-details", data => {
  if (SAVE_ENDPOINT) {
    request(SAVE_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data)
    })
  } else {
    console.warn("No save endpoint")
  }
})
