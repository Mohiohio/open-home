import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheck,
  faClipboardList,
  faTimes
} from "@fortawesome/free-solid-svg-icons"
import Column from "../../components/Column"
import Row from "../../components/Row"
import Button from "../../components/Button"
import Box from "../../components/Box"
import styles from "./Register.module.scss"

const Register = ({ goToPage, setDetails }) => {
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
            Register
          </h1>
          <p>
            If this awesome home doesn&apos;t cut the mustard for you, would you
            like us to keep an eye out or let you know when we have another
            property that might?
          </p>
          <div className={styles.actions}>
            <Button
              isHighlighted
              onClick={() => {
                setDetails({ contact: true })
                goToPage("details")
              }}
            >
              <FontAwesomeIcon icon={faCheck} /> Yes Please
            </Button>
            <Button
              isHighlighted={false}
              onClick={() => {
                setDetails({ contact: false })
                goToPage("thanks")
              }}
            >
              <FontAwesomeIcon icon={faTimes} /> No Thanks
            </Button>
          </div>
        </Column>
      </Row>
    </Box>
  )
}

Register.propTypes = {
  goToPage: PropTypes.func.isRequired,
  setDetails: PropTypes.func.isRequired
}

export default Register
