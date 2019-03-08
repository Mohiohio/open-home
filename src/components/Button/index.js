import React from "react"
import classNames from "classnames"
// import "../../styles/_global.scss";
// import "../../styles/_variables.scss";
import styles from "./Button.module.scss"

function Button({
  displayMode = 'default',
  content,
  children,
  isHighlighted = false,
  isHollow = false,
  isText = false,
  isWide = false,
  isDanger = false,
  isDisabled = false,
  size = 'normal',
  className, 
  onClick,
}) {
  return (
    <button 
      className={classNames(styles.Button, size, className, {
        [styles.isHighlighted]: !!isHighlighted,
        "isHollow": !!isHollow,
        "isDisabled": !!isDisabled,
        "isDanger": !!isDanger,
        "isWide": !!isWide,
        "isText": !!isText,
      })}	
      onClick={() => onClick()}
      >
        {children ? children : content}
    </button>
  )
}

export default Button
