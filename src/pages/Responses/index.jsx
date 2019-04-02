import React, { useEffect, useState } from "react"
import { unparse } from "papaparse"
import { saveAs } from "file-saver"
import ReactDataGrid from "react-data-grid"
import { Toolbar, Data, Filters } from "react-data-grid-addons"
import { applyFilters } from "../../utils/hooks"
import Box from "../../components/Box"
import Row from "../../components/Row"
import Column from "../../components/Column"
import styles from "./Responses.module.scss"

const selectors = Data.Selectors
const { AutoCompleteFilter } = Filters

const defaultColumnProperties = {
  filterable: true,
  width: 160,
  filterRenderer: AutoCompleteFilter
}

const columns = [
  { key: "address", name: "Address" },
  { key: "firstName", name: "First Name" },
  { key: "lastName", name: "Last Name" },
  { key: "mobile", name: "Mobile" },
  { key: "email", name: "Email" },
  { key: "contact", name: "Contact" },
  { key: "lookingFor", name: "Looking For", width: 280 }
].map(config => ({ ...defaultColumnProperties, ...config }))

const handleFilterChange = filter => filters => {
  const newFilters = { ...filters }
  if (filter.filterTerm) {
    newFilters[filter.column.key] = filter
  } else {
    delete newFilters[filter.column.key]
  }
  return newFilters
}

function getValidFilterValues(rows, columnId) {
  return rows
    .map(r => r[columnId])
    .filter((item, i, a) => {
      return i === a.indexOf(item)
    })
}

function getRows(rows, filters) {
  return selectors.getRows({ rows, filters })
}

function Responses() {
  const [filters, setFilters] = useState({})
  const [rows, setRows] = useState([])
  useEffect(() => {
    applyFilters("load-responses")
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

  const filteredRows = getRows(rows, filters)

  const downloadCSV = () => {
    const csv = unparse(filteredRows)
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" })
    saveAs(blob, "responses.csv")
  }

  return (
    <Box>
      <Row>
        <Column hasPadding={false}>
          <h1>Open Home Responses</h1>
          <div className={styles.gridWrap}>
            <ReactDataGrid
              columns={columns}
              rowGetter={i => filteredRows[i]}
              rowsCount={rows.length}
              minHeight={500}
              maxWidth={900}
              toolbar={
                <Toolbar enableFilter={true}>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => downloadCSV()}
                  >
                    Export CSV
                  </button>
                </Toolbar>
              }
              onAddFilter={filter => setFilters(handleFilterChange(filter))}
              onClearFilters={() => setFilters({})}
              getValidFilterValues={columnKey =>
                getValidFilterValues(rows, columnKey)
              }
            />
          </div>
        </Column>
      </Row>
    </Box>
  )
}

export default Responses
