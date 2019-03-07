import React from "react"
import Column from '../Column';
import Button from '../Button';
import Row from '../Row';
import styles from './Details.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"

const Details = () => {
  return (
    <div className={styles.Box}>
    <Row>
      <Column>
        <h1><FontAwesomeIcon icon={faBuilding} color="hsl(288, 67%, 24%)" /> Detail</h1>
        <p>Details Page</p>      
        <div className={styles.actions}>
          <Button
              isHighlighted
              onClick={() => {
                setDetails({ contact: true })
                gotToPage("intro")
              }}
            ><FontAwesomeIcon icon={faCheck} /> OK
            </Button>
          </div>
          
      </Column>
      </Row>
    </div>
  )
}

export default Details
