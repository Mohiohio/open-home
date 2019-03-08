import React, { useState } from "react"
import Column from "../Column"
import Button from "../Button"
import Row from "../Row"
import styles from "./Thanks.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"

const Thanks = ({ details, goToPage }) => {
  const [showPrivacy, setShowPrivacy] = useState(false)
  return (
    <div className={styles.Box}>
      <Row>
        <Column>
          <h1>
            <FontAwesomeIcon icon={faBuilding} color="hsl(288, 67%, 24%)" />{" "}
            Thanks
          </h1>
          <p>
            Enjoy your look around{" "}
            {details.firstName && `${details.firstName},`} and hopefully this is
            the one for you!!
          </p>
          <p>
            We'll be giving you a call in the next couple of days so you can
            tell us what you thought of our handy work. Thanks for coming along.
          </p>
          <div className={styles.actions}>
            <Button
              isHighlighted={true}
              onClick={() => {
                goToPage("intro")
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
        {showPrivacy && (
          <div>
            <p>
              We collect personal information from you, including your name and
              contact information.
            </p>
            <p>
              We collect your personal information in order to maintain a
              register for insurance purposes and follow up with people who have
              been through our property.
            </p>
            <p>
              Providing some information is optional. If you choose not to enter
              an email address, we'll make sure you don't get any updates on
              what we're working on.
            </p>
            <p>
              You have the right to ask for a copy of any personal information
              we hold about you, and to ask for it to be corrected if you think
              it is wrong. If you’d like to ask for a copy of your information,
              or to have it corrected, please contact us at
              howdy@myproperties.co.nz.
            </p>
            <p>
              We won't burden you with useless emails and we'll always give you
              the option to opt out later if you decide you don't want to hear
              from us again.
            </p>
          </div>
        )}
      </Row>
    </div>
  )
}

export default Thanks
