import React, { useReducer } from "react"
import ReactDOM from "react-dom"
import "typeface-lato"
import Intro from "./pages/Intro"
import Details from "./pages/Details"
import Thanks from "./pages/Thanks"
import Setup from "./pages/Setup"
import styles from "./index.module.scss"
import { doAction } from "./utils/hooks"
import useRouter from "./hooks/useRouter"
import "./plugins/myproperties"

import "./overrides.css"
import Responses from "./pages/Responses"
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

  const renderPage = page => {
    switch (page) {
      case "/details":
        return (
          <Details
            setDetails={setDetails}
            details={state.details}
            goToPage={goToPage}
            saveDetails={saveDetails}
          />
        )
      case "/thanks":
        return (
          <Thanks
            details={state.details}
            goToPage={goToPage}
            onDone={saveDetails}
          />
        )
      case "/setup":
        return (
          <Setup
            initialAddress={state.address.fullAddress}
            setAddress={address => dispatch({ type: "set-address", address })}
            goToPage={goToPage}
          />
        )
      case "/responses":
        return <Responses goToPage={goToPage} />
      case "/":
      default:
        return (
          <Intro
            address={state.address}
            goToPage={goToPage}
            details={state.details}
            setDetails={setDetails}
          />
        )
    }
  }

  return <div className={styles.Container}>{renderPage(location.pathname)}</div>
}

ReactDOM.render(<App />, document.getElementById("root"))
