import React from "react"
import Details from "./pages/Details"
import Thanks from "./pages/Thanks"
import Setup from "./pages/Setup"
import Responses from "./pages/Responses"
import Intro from "./pages/Intro"
import addRoute from "./utils/addRoute"

addRoute("/details", ({ state, setDetails, saveDetails, goToPage }) => (
  <Details
    setDetails={setDetails}
    details={state.details}
    goToPage={goToPage}
    saveDetails={saveDetails}
  />
))

addRoute("/thanks", ({ state, goToPage, saveDetails }) => (
  <Thanks details={state.details} goToPage={goToPage} onDone={saveDetails} />
))

addRoute("/setup", ({ state, goToPage, dispatch }) => (
  <Setup
    initialAddress={state.address.fullAddress}
    setAddress={address => dispatch({ type: "set-address", address })}
    goToPage={goToPage}
  />
))

addRoute("/responses", ({ goToPage }) => <Responses goToPage={goToPage} />)

addRoute("/", ({ state, goToPage, setDetails }) => (
  <Intro
    address={state.address}
    goToPage={goToPage}
    details={state.details}
    setDetails={setDetails}
  />
))
