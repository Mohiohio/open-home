import React, { Fragment, useState, useEffect } from "react"
import { isEmpty } from "ramda"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faCheck } from "@fortawesome/free-solid-svg-icons"
import Row from "../../components/Row"
import Column from "../../components/Column"

import { validateFields } from "../../validate"
import TextField from "../../components/TextField"
import Button from "../../components/Button"
import Box from "../../components/Box"
import styles from "./Intro.module.scss"

const validators = {
  firstName: v => (!v ? "Please supply a value for this field" : null),
  lastName: v => (!v ? "Please supply a value for this field" : null),
  // email: v =>
  //   v && v.indexOf("@") <= 0 ? "Please supply a valid email address" : null,
  mobile: v =>
    !String(v).match(/[0-9]+/) ? "Please supply a phone number" : null
}

const Intro = ({ details, address, setDetails, goToPage }) => {
  const [errors, setErrors] = useState({})

  const validate = () => {
    const err = validateFields(details, validators)
    if (err) {
      setErrors(err)
      return false
    }
    setErrors({})
    return true
  }

  useEffect(() => {
    if (isEmpty(address)) {
      goToPage("setup")
    }
  }, [address])

  return (
    <Box>
      <Row collapse>
        <Column className={styles.onlyWide} collapse>
          <h1>
            <div className={styles.heroIcon}>
              <FontAwesomeIcon
                icon={faBuilding}
                // color="hsl(288, 67%, 24%)"
                color="hsl(185, 100%, 55%)"
                onClick={() => goToPage("setup")}
              />
            </div>
            {address.address1}
          </h1>
          <h5>{address.fullAddress}</h5>
          <p>Welcome to our Open Home at {address.address1}</p>
          <p>
            Before you check out our handy work, please take a moment to
            complete our register.
          </p>
        </Column>
        <Column hasDivider>
          <Row hasPadding={false}>
            <Column>
              <TextField
                label={
                  <Fragment>
                    First Name <span className={styles.required}>*</span>
                  </Fragment>
                }
                value={details.firstName}
                setValue={firstName => setDetails({ firstName })}
                error={errors.firstName}
              />
            </Column>
            <Column>
              <TextField
                label={
                  <Fragment>
                    Last Name <span className={styles.required}>*</span>
                  </Fragment>
                }
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
          <Row>
            <div className={styles.actions}>
              <Button
                isHighlighted
                onClick={() => {
                  if (validate()) {
                    goToPage("register")
                  }
                }}
              >
                <FontAwesomeIcon icon={faCheck} /> Next
              </Button>
            </div>
          </Row>
        </Column>
      </Row>
    </Box>
  )
}

Intro.propTypes = {
  details: PropTypes.object,
  address: PropTypes.object,
  setDetails: PropTypes.func.isRequired,
  goToPage: PropTypes.func.isRequired
}

export default Intro
