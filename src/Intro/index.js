import React from "react"

const Intro = ({ address, setDetails, gotToPage }) => {
  return (
    <div>
      <p>
        Welcome to our Open Home at {address} Before you check out our handy
        work, please take a moment to complete our Open Home Register.
      </p>
      <form>
        <label>
          First Name
          <input
            onChange={({ target: { value } }) =>
              setDetails({ firstName: value })
            }
          />
        </label>
        <label>
          Last Name
          <input
            onChange={({ target: { value } }) =>
              setDetails({ lastName: value })
            }
          />
        </label>
        <label>
          Mobile
          <input
            type="tel"
            onChange={({ target: { value } }) => setDetails({ phone: value })}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            onChange={({ target: { value } }) => setDetails({ email: value })}
          />
        </label>
        <p>
          If this awesome home doesn't cut the mustard for you, would you like
          us to keep an eye out or let you know when we have another property
          that might?
        </p>
        <button
          onClick={() => {
            setDetails({ contact: true })
            gotToPage("details")
          }}
        >
          Yes Please :)
        </button>
        <button
          onClick={() => {
            setDetails({ contact: false })
            gotToPage("thanks")
          }}
        >
          No Thanks
        </button>
      </form>
    </div>
  )
}

export default Intro
