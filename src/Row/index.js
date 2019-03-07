import React from "react"
import classNames from "classnames"
import styles from "./Row.module.scss"

function Row({
  hasPadding = true,
  children
}) {
  return (
    <div 
      className={classNames(styles.Row, {
        [styles.hasPadding]: !!hasPadding,
      })}	
      >
        {children}
    </div>
  )
}

export default Row
