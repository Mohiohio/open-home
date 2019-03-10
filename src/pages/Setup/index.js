import React, { useState } from "react"
import Row from "../../components/Row"
import Column from "../../components/Column"
import AddressFinder from "../../components/AddressFinder"
import Box from "../../components/Box"
import Actions from "../../components/Actions"
import Button from "../../components/Button"

const Setup = ({ initialAddress, setAddress, goToPage }) => {
  // const [address, setAddress] = useState(initialAddress)
  return (
    <Box>
      <Row>
        <Column>
          <h1>What&apos;s the address?</h1>
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

export default Setup
