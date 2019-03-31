import { addAction, addFilter } from "../../utils/hooks"
import request from "../../utils/request"

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

  addAction("init", ({ dispatch, goToPage }) => {
    request(`${SAVE_ENDPOINT}/open-home`, requestDefaults)
      .then(res => {
        const authenticated = !!res.user_id

        if (!authenticated) {
          dispatch({
            type: "set-authenticated",
            authenticated: false
          })
        } else {
          const params = new URLSearchParams(window.location.search)
          // Do we have an address Id to load ?
          if (params.has("addressId")) {
            request(
              `${SAVE_ENDPOINT}/property-address?id=${params.get("addressId")}`,
              requestDefaults
            )
              .then(address => {
                dispatch({
                  type: "set-address",
                  address: {
                    ...address,
                    address1: address.postal_line_1,
                    address2: address.postal_line_2,
                    fullAddress: address.postal
                  }
                })
                dispatch({
                  type: "set-authenticated",
                  authenticated
                })
              })
              .catch(e => {
                // Couldn't find address, so clear existing and authenticate
                dispatch({
                  type: "set-address",
                  address: {}
                })
                dispatch({
                  type: "set-authenticated",
                  authenticated
                })
                goToPage("setup")
                console.error(e)
                console.error("Unable to load address")
              })
          } else {
            dispatch({
              type: "set-authenticated",
              authenticated
            })
          }
        }
      })
      .catch(e => {
        if (e.response && e.response.status === 401) {
          dispatch({ type: "set-authenticated", authenticated: false }) //IS_LOCALHOST })
        }
        throw e
      })
  })
} else {
  console.warn("No save endpoint")
}
