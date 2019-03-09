import React from "react"
import Row from "../../components/Row"
import Column from "../../components/Column"
import AddressFinder from "../../components/AddressFinder"
import Box from "../../components/Box"

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
