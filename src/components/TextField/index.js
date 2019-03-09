import React from "react"
import FieldWrap from "../FieldWrap"

const TextField = ({ label, value, setValue, type = "text", error }) => {
  return (
    <FieldWrap label={label} error={error}>
      <input
        type={type}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
    </FieldWrap>
  )
}

export default TextField
