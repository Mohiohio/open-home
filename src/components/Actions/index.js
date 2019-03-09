import React from "react"
import styles from "./Actions.module.scss"

const Actions = ({ children }) => {
  return <div className={styles.actions}>{children}</div>
}

export default Actions
