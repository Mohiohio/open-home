import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./Row.module.scss"

function Row({ hasPadding = true, collapse = false, children }) {
  return (
    <div
      className={classNames(styles.Row, {
        [styles.hasPadding]: hasPadding,
        [styles.collapse]: collapse
      })}
    >
      {children}
    </div>
  )
}

Row.propTypes = {
  hasPadding: PropTypes.bool,
  collapse: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Row
