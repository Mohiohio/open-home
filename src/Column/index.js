import React from "react"
import classNames from "classnames"
import styles from "./Column.module.scss"

function Column({
  hasPadding = true,
  hasDivider = false,
  children
}) {
  return (
    <div 
      className={classNames(styles.Column, {
        [styles.hasPadding]: !!hasPadding,
        [styles.hasDivider]: !!hasDivider,
      })}	
      >
        {children}
    </div>
  )
}

export default Column
