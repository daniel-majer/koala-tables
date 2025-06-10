import { createContext, use, useState } from 'react'
import { data } from '../data'

const DataContext = createContext({})

const TableContext = ({ children }) => {
  const [tableData, setTableData] = useState(data)

  return (
    <DataContext value={{ tableData, setTableData }}>{children}</DataContext>
  )
}

function useTableContext() {
  const context = use(DataContext)
  if (!context) {
    throw new Error(
      'useTableContext must be used within a TableContext provider'
    )
  }
  return context
}
export { TableContext, useTableContext }
