import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import styles from "./Button.module.scss"

function Button({
  children,
  isHighlighted = false,
  isHollow = false,
  isText = false,
  isWide = false,
  isDanger = false,
  isDisabled = false,
  size = "normal",
  className,
  onClick
}) {
  return (
    <button
      className={classNames(styles.Button, size, className, {
        [styles.isHighlighted]: isHighlighted,
        isHollow: isHollow,
        isDisabled: isDisabled,
        isDanger: isDanger,
        isWide: isWide,
        isText: isText
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isHighlighted: PropTypes.bool,
  isHollow: PropTypes.bool,
  isText: PropTypes.bool,
  isWide: PropTypes.bool,
  isDanger: PropTypes.bool,
  isDisabled: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string
}

export default Button
