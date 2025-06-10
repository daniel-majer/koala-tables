import { createContext, useState } from 'react'
import { data } from '../data'

export const DataContext = createContext({})

export const TableContext = ({ children }) => {
  const [tableData, setTableData] = useState(data)

  return (
    <DataContext value={{ tableData, setTableData }}>{children}</DataContext>
  )
}
