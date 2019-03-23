import React from "react"
import PropTypes from "prop-types"
import FieldWrap from "../FieldWrap"
import AddressFinder from "../AddressFinder"

const AddressField = ({ label, value, setValue, error }) => {
  return (
    <FieldWrap label={label} error={error}>
      <AddressFinder value={value} onSelect={setValue} />
    </FieldWrap>
  )
}

AddressField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export default AddressField
