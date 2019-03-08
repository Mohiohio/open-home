import React from "react"
import Column from "../Column"
import Button from "../Button"
import Row from "../Row"
import styles from "./Details.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faClipboardList } from "@fortawesome/free-solid-svg-icons"

const Details = ({ goToPage, details, setDetails }) => {
  return (
    <div className={styles.Box}>
      <Row>
        <Column>
          <h1>
            <FontAwesomeIcon icon={faClipboardList} color="hsl(288, 67%, 24%)" />{" "}
            Detail
          </h1>
          <p>
            Okay, how about you give us a quick couple of hints about what
            you're looking for? of bedrooms Price range Anything else?
          </p>
          </Column>
          <Column hasDivider>
          <label>What are you looking for?</label>
          <textarea
            value={details.lookingFor}
            onChange={({ target: { value } }) =>
              setDetails({ lookingFor: value })
            }
          />
          <div className={styles.actions}>
            <Button
              isHighlighted
              onClick={() => {
                setDetails({ contact: true })
                goToPage("thanks")
              }}
            >
              <FontAwesomeIcon icon={faCheck} /> Submit
            </Button>
          </div>
        </Column>
      </Row>
    </div>
  )
}

export default Details
