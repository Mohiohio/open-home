import React, { useReducer, useEffect } from "react"
import ReactDOM from "react-dom"
import { isEmpty } from "ramda"
import "typeface-lato"
import styles from "./index.module.scss"
import { doAction, applyFilters } from "./utils/hooks"
import useRouter from "./hooks/useRouter"
import "./plugins/MyProperties"

import "./overrides.css"
import "./routes"
import Loading from "./components/Loading"
import logoIcon from "./assets/logo-icon-only--white.png"
import logoWords from "./assets/logo-words-only.png"

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
      if (isEmpty(action.address)) {
        localStorage.removeItem("address")
      } else {
        localStorage.setItem("address", JSON.stringify(action.address))
      }
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
  const [location, goToPage] = useRouter()

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
    doAction("init", { dispatch, goToPage })
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
      <div className={styles.logoWrap}>
        <img src={logoIcon} alt="" />
        <img src={logoWords} alt="" />
      </div>
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
