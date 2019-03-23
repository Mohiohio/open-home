import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import styles from "./Column.module.scss"

function Column({
  hasPadding = true,
  hasDivider = false,
  collapse = false,
  children,
  className
}) {
  return (
    <div
      className={classNames(styles.Column, className, {
        [styles.collapse]: collapse,
        [styles.hasPadding]: hasPadding,
        [styles.hasDivider]: hasDivider
      })}
    >
      {children}
    </div>
  )
}

Column.propTypes = {
  hasPadding: PropTypes.bool,
  hasDivider: PropTypes.bool,
  collapse: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Column
