import React from "react"
import Row from "../Row"
import Column from "../Column"
import AddressFinder from "../AddressFinder"
import Box from "../Box"

const Setup = ({ setAddress }) => {
  return (
    <Box>
      <Row>
        <Column>
          <h1>Address</h1>
          <AddressFinder onSelect={console.log} />
        </Column>
      </Row>
    </Box>
  )
}

export default Setup
