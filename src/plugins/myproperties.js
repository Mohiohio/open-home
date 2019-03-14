import { addAction } from "../utils/hooks"
import request from "../utils/request"

const SAVE_ENDPOINT = process.env.SAVE_ENDPOINT

addAction("save-details", data => {
  if (SAVE_ENDPOINT) {
    console.log("sending")
    request(SAVE_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  } else {
    console.warn("No save endpoint")
  }
})
