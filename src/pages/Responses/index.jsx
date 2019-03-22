import React, { useEffect, useState } from "react"
import ReactDataGrid from "react-data-grid"
import { applyFilters } from "../../utils/hooks"

const columns = [
  { key: "address", name: "Address" },
  { key: "firstName", name: "First Name" },
  { key: "lastName", name: "Last Name" },
  { key: "mobile", name: "Mobile" },
  { key: "email", name: "Email" },
  { key: "contact", name: "Contact" },
  { key: "lookingFor", name: "Looking For" }
]

function Responses() {
  const [rows, setRows] = useState([])
  useEffect(() => {
    applyFilters("load-responses", rows)
      .then(data => {
        setRows(
          data.map(row => ({
            ...row.details,
            address: row.address.address1,
            contact: row.details.contact ? "Yes" : "No"
          }))
        )
      })
      .catch(e => {
        console.error(e)
      })
  }, [])
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={rows.length}
      minHeight={150}
    />
  )
}

export default Responses
