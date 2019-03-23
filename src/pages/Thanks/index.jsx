import React, { useState } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons"
import Column from "../../components/Column"
import Button from "../../components/Button"
import Row from "../../components/Row"
import Box from "../../components/Box"
import styles from "./Thanks.module.scss"

const Thanks = ({ details, goToPage, onDone }) => {
  const [showPrivacy, setShowPrivacy] = useState(false)
  return (
    <Box>
      <Row collapse>
        <Column className={styles.onlyWide} collapse>
          <h1>
            <FontAwesomeIcon
              icon={faClipboardCheck}
              color="hsl(288, 67%, 24%)"
            />{" "}
            Thanks
          </h1>
          <p>
            Enjoy your look around{" "}
            {details.firstName && `${details.firstName},`} and hopefully this is
            the one for you!!
          </p>
          <p>
            We&apos;ll be giving you a call in the next couple of days so you
            can tell us what you thought of our handy work.
          </p>
          <p>Thanks for coming along.</p>
          <div className={styles.actions}>
            <Button
              isHighlighted={true}
              onClick={() => {
                onDone()
                goToPage("/")
              }}
            >
              Done
            </Button>
            <Button
              isHighlighted={true}
              onClick={() => {
                setShowPrivacy(!showPrivacy)
              }}
            >
              Privacy Policy
            </Button>
          </div>
        </Column>
        <Column>
          {showPrivacy && (
            <div>
              <h3>Privacy Policy</h3>
              <p>
                We collect personal information from you, including your name
                and contact information.
              </p>
              <p>
                We collect your personal information in order to maintain a
                register for insurance purposes and follow up with people who
                have been through our property.
              </p>
              <p>
                Providing some information is optional. If you choose not to
                enter an email address, we&apos;ll make sure you don&apos;t get
                any updates on what we&apos;re working on.
              </p>
              <p>
                You have the right to ask for a copy of any personal information
                we hold about you, and to ask for it to be corrected if you
                think it is wrong. If you’d like to ask for a copy of your
                information, or to have it corrected, please contact us at
                howdy@myproperties.co.nz.
              </p>
              <p>
                We won&apos;t burden you with useless emails and we&apos;ll
                always give you the option to opt out later if you decide you
                don&apos;t want to hear from us again.
              </p>
            </div>
          )}
        </Column>
      </Row>
    </Box>
  )
}

Thanks.propTypes = {
  details: PropTypes.shape({
    firstName: PropTypes.string
  }),
  goToPage: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired
}

export default Thanks
