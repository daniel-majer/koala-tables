import { XIcon as TableDeleteIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { TableCollapse } from './TableCollapse'
import { useTableContext } from '../context/TableContext'
import { deleteRecursive } from '../utils/helper'
import { TableCollapseIcon } from './TableCollapseIcon'

export const TableRow = ({ row }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { tableData, setTableData } = useTableContext()

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
      <tr className='hover:bg-zinc-600 bg-zinc-900'>
        <td className='border border-zinc-700 p-2'>
          <TableCollapseIcon
            row={row}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </td>

        {Object.values(row.data).map((value, idx) => (
          <td key={idx} className='border border-zinc-700 p-2'>
            {value}
          </td>
        ))}

        <td className='border border-zinc-700 p-2'>
          <TableDeleteIcon
            className='text-red-500 mx-auto cursor-pointer'
            onClick={() => handleDelete(row.data)}
          />
        </td>
      </tr>
      {isCollapsed && <TableCollapse row={row} />}
    </>
  )
}
