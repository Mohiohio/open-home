import React, { useState } from "react"
import Column from "../Column"
import Button from "../Button"
import Row from "../Row"
import styles from "./Intro.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBuilding,
  faCheck,
  faTimes,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons"
import { validateFields } from "../../validate"

const validators = {
  // firstName: v => (!v ? "Please supply a value for this field" : null),
  // lastName: v => (!v ? "Please supply a value for this field" : null),
  // email: v =>
  //   v && v.indexOf("@") <= 0 ? "Please supply a valid email address" : null,
  mobile: v => (!v ? "Please supply a value for this field" : null)
}

const Intro = ({ details, address, setDetails, goToPage }) => {
  const [errors, setErrors] = useState({})
  return (
    <div className={styles.Box}>
      <Row>
        <Column>
          <h1>
            <FontAwesomeIcon icon={faBuilding} color="hsl(288, 67%, 24%)" />{" "}
            {address}
          </h1>
          <p>Welcome to our Open Home at {address}</p>
          <p>
            Before you check out our handy work, please take a moment to
            complete our Open Home Register.
          </p>
        </Column>

        <Column hasDivider>
          <Row hasPadding={false}>
            <Column>
              <label>First Name</label>
              <input
                type="text"
                value={details.firstName}
                onChange={({ target: { value } }) =>
                  setDetails({ firstName: value })
                }
              />
              {errors.firstName && (
                <span className={styles.validationError}>
                  <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                  {errors.firstName}
                </span>
              )}
            </Column>
            <Column>
              <label>Last Name</label>
              <input
                type="text"
                value={details.lastName}
                onChange={({ target: { value } }) =>
                  setDetails({ lastName: value })
                }
              />
              {errors.lastName && (
                <span className={styles.validationError}>
                  <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                  {errors.lastName}
                </span>
              )}
            </Column>
          </Row>
          <Row>
            <Column>
              <label>
                Mobile <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                value={details.mobile}
                onChange={({ target: { value } }) =>
                  setDetails({ mobile: value })
                }
                className={errors.mobile && styles.hasError}
              />
              {errors.mobile && (
                <span className={styles.validationError}>
                  <FontAwesomeIcon icon={faExclamationCircle} /> {errors.mobile}
                </span>
              )}
              <label>Email</label>
              <input
                type="email"
                value={details.email}
                onChange={({ target: { value } }) =>
                  setDetails({ email: value })
                }
              />
              {errors.email && (
                <span className={styles.validationError}>
                  <FontAwesomeIcon icon={faExclamationCircle} /> {errors.email}
                </span>
              )}
            </Column>
          </Row>
          <Row hasPadding={false}>
            <Column>
              <p>
                If this awesome home doesn't cut the mustard for you, would you
                like us to keep an eye out or let you know when we have another
                property that might?
              </p>
            </Column>
          </Row>
          <Row>
            <div className={styles.actions}>
              <Button
                isHighlighted
                onClick={() => {
                  const errors = validateFields(details, validators)
                  if (errors) {
                    setErrors(errors)
                  } else {
                    setErrors({})
                    setDetails({ contact: true })
                    goToPage("details")
                  }
                }}
              >
                <FontAwesomeIcon icon={faCheck} /> Yes Please
              </Button>
              <Button
                isHighlighted={false}
                onClick={() => {
                  const errors = validateFields(details, validators)
                  if (errors) {
                    setErrors(errors)
                  } else {
                    setErrors({})
                    setDetails({ contact: false })
                    goToPage("thanks")
                  }
                }}
              >
                <FontAwesomeIcon icon={faTimes} /> No Thanks
              </Button>
            </div>
          </Row>
        </Column>
      </Row>
    </div>
  )
}

export default Intro
