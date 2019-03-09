import React from "react"
import FieldWrap from "../FieldWrap"
import AddressFinder from "../AddressFinder"

const AddressField = ({ label, value, setValue, error }) => {
  return (
    <FieldWrap label={label} error={error}>
      <AddressFinder value={value} onSelect={setValue} />
    </FieldWrap>
  )
}

export default AddressField
