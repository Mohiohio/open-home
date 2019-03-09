import React from "react"
import classNames from "classnames"
import styles from "./Column.module.scss"

function Column({
  hasPadding = true,
  hasDivider = false,
  collapse = false,
  children,
  className,
}) {
  return (
    <div 
      className={classNames(styles.Column, className, {
        [styles.collapse]: !!collapse,
        [styles.hasPadding]: !!hasPadding,
        [styles.hasDivider]: !!hasDivider,
      })}	
      >
        {children}
    </div>
  )
}

export default Column
