import React, { useReducer } from "react"
import ReactDOM from "react-dom"
import "typeface-lato"
import Intro from "./components/Intro"
import Details from "./components/Details"
import Thanks from "./components/Thanks"
import Setup from "./components/Setup"
import styles from "./index.module.scss"
import { doAction } from "./utils/hooks"

const initialState = {
  page: "into",
  address: {
    display: "20 Example Street"
  },
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
    default: {
      return state
    }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const goToPage = page => {
    dispatch({ type: "set-page", page })
  }

  const setDetails = details => {
    dispatch({
      type: "set-details",
      details
    })
  }

  const saveDetails = details => {
    doAction("save-details", details)
  }

  const renderPage = () => {
    switch (state.page) {
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
            <Setup details={state.details} setDetails={setDetails} />
          </div>
        )
      case "intro":
      default:
        return (
          <div className={styles.Container}>
            <Intro
              address={state.address.display}
              goToPage={goToPage}
              details={state.details}
              setDetails={setDetails}
            />

            <button onClick={() => goToPage("setup")}>Setup</button>
          </div>
        )
    }
  }

  return <div>{renderPage()}</div>
}

ReactDOM.render(<App />, document.getElementById("root"))
