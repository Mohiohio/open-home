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

const localStoreAddress = localStorage.getItem("address")

const initialState = {
  page: localStoreAddress ? "" : "setup",
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
    case "set-page":
      return {
        ...state,
        page: action.page
      }
    case "set-details":
      return {
        ...state,
        details: {
          ...state.details,
          ...action.details
        }
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
  const [page, goToPage] = useRouter()

  const setDetails = details => {
    dispatch({
      type: "set-details",
      details
    })
  }

  const saveDetails = details => {
    doAction("save-details", { details, address: state.address })
    // dispatch({ type: "set-details", details: {} })
  }

  const renderPage = () => {
    switch (page) {
      case "details":
        return (
          <div className={styles.Container}>
            <Details
              setDetails={setDetails}
              details={state.details}
              goToPage={goToPage}
            />
          </div>
        )
      case "thanks":
        saveDetails(state.details)
        return (
          <div className={styles.Container}>
            <Thanks details={state.details} goToPage={goToPage} />
          </div>
        )
      case "setup":
        return (
          <div className={styles.Container}>
            <Setup
              initialAddress={state.address.fullAddress}
              setAddress={address => dispatch({ type: "set-address", address })}
              goToPage={goToPage}
            />
          </div>
        )
      case "":
      default:
        return (
          <div className={styles.Container}>
            <Intro
              address={state.address}
              goToPage={goToPage}
              details={state.details}
              setDetails={setDetails}
            />
          </div>
        )
    }
  }

  return <div>{renderPage()}</div>
}

ReactDOM.render(<App />, document.getElementById("root"))
