import React from "react"
import classNames from "classnames"
import styles from "./Column.module.scss"

function Column({
  hasPadding = true,
  children
}) {
  return (
    <div 
      className={classNames(styles.Column, {
        [styles.hasPadding]: !!hasPadding,
      })}	
      >
        {children}
    </div>
  )
}

export default Column
