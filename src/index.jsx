import React, { useReducer } from "react"
import ReactDOM from "react-dom"
import "typeface-lato"
import styles from "./index.module.scss"
import { doAction, applyFilters } from "./utils/hooks"
import useRouter from "./hooks/useRouter"
import "./plugins/MyProperties"

import "./overrides.css"
import "./routes"
const localStoreAddress = localStorage.getItem("address")

const initialState = {
  address: localStoreAddress ? JSON.parse(localStoreAddress) : {},
  details: {
    firstName: "",
    lastName: "",
    mobile: "",
    email: ""
  }
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

  return (
    <div className={styles.Container}>
      {applyFilters("route", null, location, {
        state,
        dispatch,
        setDetails,
        goToPage,
        saveDetails
      })}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
