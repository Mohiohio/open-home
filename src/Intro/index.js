import React from "react"
import Column from '../Column';
import Button from '../Button';
import Row from '../Row';
import styles from './Intro.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding } from "@fortawesome/free-solid-svg-icons"

const Intro = ({ address, setDetails, gotToPage }) => {
  return (
    <div className={styles.Intro}>
      <h1><FontAwesomeIcon icon={faBuilding} color="hsl(288, 67%, 24%)" /> {address}</h1>
      <p>
        Welcome to our Open Home at {address} Before you check out our handy
        work, please take a moment to complete our Open Home Register.
      </p>
      <form>
        <Row>
          <Column>
            <label>
              First Name
              </label>
              <input
              type="text"
                onChange={({ target: { value } }) =>
                  setDetails({ firstName: value })
                }
              />
        </Column>
        <Column>
        <label>
          Last Name
          </label>
          <input
            type="text"
            onChange={({ target: { value } }) =>
              setDetails({ lastName: value })
            }
          />
        </Column>
        </Row>
        <Row>
          <Column> 
            <label>
              Mobile
              <input
                type="tel"
                onChange={({ target: { value } }) => setDetails({ phone: value })}
              />
            </label>
            </Column>
            <Column>
            <label>
              Email
              <input
                type="email"
                onChange={({ target: { value } }) => setDetails({ email: value })}
              />
            </label>
          </Column>
        </Row>
        <p>
          If this awesome home doesn't cut the mustard for you, would you like
          us to keep an eye out or let you know when we have another property
          that might?
        </p>
        <Row>
        <Button
          isHighlighted
          onClick={() => {
            setDetails({ contact: true })
            gotToPage("details")
          }}
        >
          Yes Please :)
        </Button>
        <Button
          isHighlighted={false}
          onClick={() => {
            setDetails({ contact: false })
            gotToPage("thanks")
          }}
        >
          No Thanks
        </Button>
        </Row>
      </form>
    </div>
  )
}

export default Intro
