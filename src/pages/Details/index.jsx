import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faClipboardList } from "@fortawesome/free-solid-svg-icons"
import Column from "../../components/Column"
import Row from "../../components/Row"
import Button from "../../components/Button"
import Box from "../../components/Box"
import TextArea from "../../components/TextArea"
import styles from "./Details.module.scss"

const Details = ({ goToPage, details, setDetails }) => {
  return (
    <Box>
      <Row collapse>
        <Column className={styles.onlyWide} collapse>
          <h1>
            <div className={styles.heroIcon}>
              <FontAwesomeIcon
                icon={faClipboardList}
                // color="hsl(288, 67%, 24%)"
                color="hsl(185, 100%, 55%)"
              />
            </div>{" "}
            Detail
          </h1>
          <p>
            Okay, how about you give us a quick couple of hints about what
            you&apos;re looking for? of bedrooms Price range Anything else?
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

Details.propTypes = {
  goToPage: PropTypes.func.isRequired,
  details: PropTypes.shape({
    lookingFor: PropTypes.string
  }),
  setDetails: PropTypes.func.isRequired
}

export default Details
