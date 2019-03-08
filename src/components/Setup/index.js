import React from "react"
import Row from "../Row"
import Column from "../Column"
import AddressFinder from "../AddressFinder"

const Setup = ({ setAddress }) => {
  return (
    <div>
      <Row>
        <Column>
          <h1>Address</h1>
          <AddressFinder onSelect={console.log} />
        </Column>
      </Row>
    </div>
  )
}

export default Setup
