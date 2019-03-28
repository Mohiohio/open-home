import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import styles from "./Loading.module.scss"

export default function Loading({
  text = "Loading...",
  displayMode = "default" // or 'overlay'
}) {
  return (
    <div className={`${styles.Loading} ${styles[displayMode]}`}>
      <span className={styles.iconWrap}>
        <FontAwesomeIcon icon={faSpinner} />
      </span>
      <p>{text}</p>
    </div>
  )
}

Loading.propTypes = {
  text: PropTypes.string,
  displayMode: PropTypes.string
}
