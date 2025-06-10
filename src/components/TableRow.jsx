import { SquareChevronDownIcon, XIcon } from 'lucide-react'
import { use, useEffect, useState } from 'react'
import { TableCollapse } from './TableCollapse'
import { DataContext } from '../context/TableContext'
import { deleteRecursive } from '../utils/helper'

export const TableRow = ({ row }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { tableData, setTableData } = use(DataContext)

  useEffect(() => {
    if (row.children && Object.keys(row.children).length === 0) {
      setIsCollapsed(false)
    }
  }, [row.children])

  const handleDelete = rowRef => {
    const newData = tableData
      .map(item => deleteRecursive(item, rowRef))
      .filter(Boolean)
    if (isCollapsed) setIsCollapsed(false)
    setTableData(newData)
  }

  return (
    <>
      <tr className='hover:bg-zinc-600'>
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
      <TableCollapse row={row} isCollapsed={isCollapsed} />
    </>
  )
}
