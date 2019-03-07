import React from "react"
import Column from '../Column';
import Button from '../Button';
import Row from '../Row';
import styles from './Thanks.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"

const Thanks = () => {
  return (
    <div className={styles.Box}>
    <Row>
      <Column>
        <h1><FontAwesomeIcon icon={faBuilding} color="hsl(288, 67%, 24%)" /> Thanks</h1>
        <p>Thanks Page</p>      
        <div className={styles.actions}>
          <Button
              isHighlighted={true}
              onClick={() => {
                setDetails({ contact: true })
                gotToPage("intro")
              }}
            >Done
            </Button>
          </div>
          
      </Column>
      </Row>
    </div>
  )
}

export default Thanks
