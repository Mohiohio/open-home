import React from "react"
import Column from "../Column"
import Button from "../Button"
import Row from "../Row"
import Box from "../Box"
import styles from "./Details.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faClipboardList } from "@fortawesome/free-solid-svg-icons"
import TextArea from "../TextArea"

const Details = ({ goToPage, details, setDetails }) => {
  return (
    <Box>
      <Row>
        <Column>
          <h1>
            <FontAwesomeIcon
              icon={faClipboardList}
              color="hsl(288, 67%, 24%)"
            />{" "}
            Detail
          </h1>
          <p>
            Okay, how about you give us a quick couple of hints about what
            you're looking for? of bedrooms Price range Anything else?
          </p>
        </Column>
        <Column hasDivider>
          <TextArea
            label="What are you looking for?"
            value={details.lookingFor}
            setValue={lookingFor => setDetails({ lookingFor })}
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
    </Box>
  )
}

export default Details
