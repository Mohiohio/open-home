import React from "react"
import PropTypes from "prop-types"
import FieldWrap from "../FieldWrap"

const TextArea = ({ label, value, setValue, error }) => {
  return (
    <FieldWrap label={label} error={error}>
      <textarea value={value} onChange={e => setValue(e.target.value, e)} />
    </FieldWrap>
  )
}

TextArea.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default TextArea
