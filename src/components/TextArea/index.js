import React from "react"
import FieldWrap from "../FieldWrap"

const TextArea = ({ label, value, setValue, error }) => {
  return (
    <FieldWrap label={label} error={error}>
      <textarea
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
    </FieldWrap>
  )
}

export default TextArea
