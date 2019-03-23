import React from "react"
import PropTypes from "prop-types"
import FieldWrap from "../FieldWrap"

const TextField = ({ label, value, setValue, type = "text", error }) => {
  return (
    <FieldWrap label={label} error={error}>
      <input
        type={type}
        value={value}
        onChange={e => setValue(e.target.value, e)}
      />
    </FieldWrap>
  )
}

TextField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.string,
  type: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default TextField
