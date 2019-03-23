import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styles from "./FieldWrap.module.scss"

import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FieldWrap = ({ label, children, error }) => {
  return (
    <Fragment>
      {!!label && <label>{label}</label>}
      {children}
      {!!error && (
        <span className={styles.validationError}>
          <FontAwesomeIcon icon={faExclamationCircle} /> {error}
        </span>
      )}
    </Fragment>
  )
}

FieldWrap.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node.isRequired,
  error: PropTypes.node
}

export default FieldWrap
