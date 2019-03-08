import React from "react"
import classNames from "classnames"
import styles from "./Row.module.scss"

function Row({
  hasPadding = true,
  collapse = false,
  children
}) {
  return (
    <div 
      className={classNames(styles.Row, {
        [styles.hasPadding]: !!hasPadding,
        [styles.collapse]: !!collapse,
      })}	
      >
        {children}
    </div>
  )
}

export default Row
