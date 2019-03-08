import React, { useReducer } from "react"
import ReactDOM from "react-dom"
import "typeface-lato"
import Intro from "./Intro"
import Details from "./Details"
import Thanks from "./Thanks"
import styles from "./index.module.scss"

const initialState = {
  page: "thanks",
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

  const renderPage = () => {
    switch (state.page) {
      case "intro":
        return (
          <div className={styles.Container}>
            <Intro
              address={state.address.display}
              goToPage={goToPage}
              details={state.details}
              setDetails={setDetails}
            />
          </div>
        )
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
        return (
          <div className={styles.Container}>
            <Thanks details={state.details} goToPage={goToPage} />
          </div>
        )
    }
  }

  console.log(state.details)

  return <div>{renderPage()}</div>
}

ReactDOM.render(<App />, document.getElementById("root"))
