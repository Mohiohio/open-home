import React from "react"
import PropTypes from "prop-types"
import styles from "./Actions.module.scss"

const Actions = ({ children }) => {
  return <div className={styles.actions}>{children}</div>
}

Actions.propTypes = {
  children: PropTypes.node.isRequired
}

export default Actions
