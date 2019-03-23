import React from "react"
import PropTypes from "prop-types"
import Row from "../../components/Row"
import Column from "../../components/Column"
import AddressFinder from "../../components/AddressFinder"
import Box from "../../components/Box"
import Actions from "../../components/Actions"
import Button from "../../components/Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarked } from "@fortawesome/free-solid-svg-icons"
import styles from "./Setup.module.scss"

const Setup = ({ initialAddress, setAddress, goToPage }) => {
  return (
    <Box>
      <Row>
        <Column>
          <h1>
            <div className={styles.heroIcon}>
              <FontAwesomeIcon icon={faMapMarked} />
            </div>{" "}
            What&apos;s the address?
          </h1>
          <AddressFinder placeholder={initialAddress} onSelect={setAddress} />
          <Actions>
            <Button
              isHighlighted={true}
              onClick={() => {
                goToPage("/")
              }}
            >
              Done
            </Button>
          </Actions>
        </Column>
      </Row>
    </Box>
  )
}

Setup.propTypes = {
  initialAddress: PropTypes.string,
  setAddress: PropTypes.func.isRequired,
  goToPage: PropTypes.func.isRequired
}

export default Setup
