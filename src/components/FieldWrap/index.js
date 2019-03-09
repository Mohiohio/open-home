import React, { Fragment } from "react"
import styles from "./FieldWrap.module.scss"

import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FieldWrap = ({ label, children, error }) => {
  return (
    <Fragment>
      <label>{label}</label>
      {children}
      {!!error && (
        <span className={styles.validationError}>
          <FontAwesomeIcon icon={faExclamationCircle} /> {error}
        </span>
      )}
    </Fragment>
  )
}

export default FieldWrap
