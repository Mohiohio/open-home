import React, { useReducer, useEffect } from "react"
import ReactDOM from "react-dom"
import "typeface-lato"
import styles from "./index.module.scss"
import { doAction, applyFilters } from "./utils/hooks"
import useRouter from "./hooks/useRouter"
import "./plugins/MyProperties"

import "./overrides.css"
import "./routes"
import Loading from "./components/Loading"
const localStoreAddress = localStorage.getItem("address")

const initialState = {
  address: localStoreAddress ? JSON.parse(localStoreAddress) : {},
  authenticated: null,
  details: {
    firstName: "",
    lastName: "",
    mobile: "",
    email: ""
  },
  responses: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "set-details":
      return {
        ...state,
        details: {
          ...state.details,
          ...action.details
        }
      }
    case "reset-form":
      return {
        ...state,
        details: initialState.details
      }
    case "set-address":
      localStorage.setItem("address", JSON.stringify(action.address))
      return {
        ...state,
        address: action.address
      }
    case "set-authenticated":
      return {
        ...state,
        authenticated: action.authenticated
      }
    default: {
      return state
    }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [location, goToPage] = useRouter(localStorage.address ? "" : "setup")

  const setDetails = details => {
    dispatch({
      type: "set-details",
      details
    })
  }

  const saveDetails = () => {
    doAction("save-details", { details: state.details, address: state.address })
    dispatch({ type: "reset-form" })
  }

  useEffect(() => {
    doAction("init", { dispatch, state, goToPage })
  }, [])

  if (state.authenticated === null) {
    return (
      <div className={styles.loading}>
        <Loading text="Loading..." />
      </div>
    )
  }
  return state.authenticated ? (
    <div className={styles.Container}>
      {applyFilters("route", null, location, {
        state,
        dispatch,
        setDetails,
        goToPage,
        saveDetails
      })}
    </div>
  ) : (
    <div className={styles.Container}>
      {applyFilters(
        "login-prompt",
        <div className={styles.notLoggedIn}>
          <h4>Not logged in</h4>
          <p>Please login first</p>
        </div>
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
