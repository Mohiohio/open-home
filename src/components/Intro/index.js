import React, { Fragment, useState } from "react"
import Column from "../Column"
import Button from "../Button"
import Row from "../Row"
import styles from "./Intro.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"
import { validateFields } from "../../validate"
import TextField from "../TextField"
import Box from "../Box"

const validators = {
  // firstName: v => (!v ? "Please supply a value for this field" : null),
  // lastName: v => (!v ? "Please supply a value for this field" : null),
  // email: v =>
  //   v && v.indexOf("@") <= 0 ? "Please supply a valid email address" : null,
  mobile: v => (!v ? "Please supply a value for this field" : null)
}

const Intro = ({ details, address, setDetails, goToPage }) => {
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errors = validateFields(details, validators)
    if (errors) {
      setErrors(errors)
      return false
    }
    setErrors({})
    return true
  }

  return (
    <Box>
      <Row collapse>
        <Column className={styles.onlyWide} collapse>
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
              <TextField
                label="First Name"
                value={details.firstName}
                setValue={firstName => setDetails({ firstName })}
                error={errors.firstName}
              />
            </Column>
            <Column>
              <TextField
                label="Last Name"
                value={details.lastName}
                setValue={lastName => setDetails({ lastName })}
                error={errors.lastName}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <TextField
                label={
                  <Fragment>
                    Mobile <span className={styles.required}>*</span>
                  </Fragment>
                }
                type="tel"
                value={details.mobile}
                setValue={mobile => setDetails({ mobile })}
                error={errors.mobile}
              />
              <TextField
                label="Email"
                type="email"
                value={details.email}
                setValue={email => setDetails({ email })}
                error={errors.email}
              />
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
                  if (validate()) {
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
                  if (validate()) {
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
    </Box>
  )
}

export default Intro
