import { createContext, use, useEffect, useState } from 'react'
import { deleteRecursive } from '../utils/helper'
import { SquareChevronDownIcon, XIcon } from 'lucide-react'

const TableContext = createContext({})

const Table = ({ children, data: serverData }) => {
  const [data, setData] = useState(serverData)

  if (!data || !data?.length) {
    return (
      <tbody className='flex h-full min-h-[500px] items-center justify-center text-black transition duration-500 dark:text-white'>
        <tr>
          <td>No data available</td>
        </tr>
      </tbody>
    )
  }

  return (
    <TableContext value={{ data, setData }}>
      <table className='w-full text-center border-collapse self-start'>
        {children}
      </table>
    </TableContext>
  )
}

const Header = () => {
  const { data } = use(TableContext)
  const headerNames = data[0] ? Object.keys(data[0].data).concat('Delete') : []

  return (
    <thead>
      <tr>
        <th className='border border-zinc-700 p-2 bg-zinc-800' />
        {headerNames.map((cell, idx) => (
          <th key={idx} className='border border-zinc-700 p-2 bg-zinc-800'>
            {cell}
          </th>
        ))}
      </tr>
    </thead>
  )
}

const Body = () => {
  const { data } = use(TableContext)

  return (
    <tbody>
      {data.map((row, idx) => {
        return <Row key={idx} row={row} />
      })}
    </tbody>
  )
}

const Row = ({ row }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { data, setData } = use(TableContext)

  useEffect(() => {
    if (row.children && Object.keys(row.children).length === 0) {
      setIsCollapsed(false)
    }
  }, [row.children])

  const handleDelete = rowRef => {
    const newData = data
      .map(item => deleteRecursive(item, rowRef))
      .filter(Boolean)
    if (isCollapsed) setIsCollapsed(false)
    setData(newData)
  }

  return (
    <>
      <tr className='hover:bg-zinc-600 bg-zinc-900'>
        <td className='border border-zinc-700 p-2'>
          <SquareChevronDownIcon
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`mx-auto cursor-pointer transition duration-300  ${
              isCollapsed ? 'rotate-180' : 'rotate-0'
            } ${
              Object.keys(row.children).length > 0
                ? 'opacity-100'
                : 'opacity-10  pointer-events-none'
            }`}
          />
        </td>

        {Object.values(row.data).map((value, idx) => (
          <td key={idx} className='border border-zinc-700 p-2'>
            {value}
          </td>
        ))}
        <td className='border border-zinc-700 p-2'>
          <XIcon
            className='text-red-500 mx-auto cursor-pointer'
            onClick={() => handleDelete(row.data)}
          />
        </td>
      </tr>
      {isCollapsed && <Collapse row={row} />}
    </>
  )
}

const Collapse = ({ row }) => {
  const childrenData = Object.values(row.children || {}).flatMap(
    child => child?.records || []
  )

  return (
    <tr>
      <td colSpan={Object.keys(row.data).length + 2}>
        <div>
          <div className='bg-zinc-800 p-4 px-30 rounded'>
            <table className='w-full text-center border-collapse self-start'>
              <thead>
                <tr>
                  <th className='border border-zinc-700 p-2 bg-zinc-800' />
                  {Object.keys(childrenData[0]?.data || []).map((key, idx) => (
                    <th
                      key={idx}
                      className='border border-zinc-700 p-2 bg-zinc-800'
                    >
                      {key}
                    </th>
                  ))}
                  <th className='border border-zinc-700 p-2 bg-zinc-800'>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {childrenData.map(childRow => (
                  <Row key={childRow.data.ID} row={childRow} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </td>
    </tr>
  )
}

Table.Header = Header
Table.Row = Row
Table.Body = Body

export default Table
