import { SquareChevronDownIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import { TableCollapse } from './TableCollapse'

export const TableRow = ({ row }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  console.log(row)

  return (
    <>
      <tr className='hover:bg-zinc-600'>
        <td className='border border-zinc-700 p-2'>
          <SquareChevronDownIcon
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`mx-auto  transition duration-500  ${
              isCollapsed ? 'rotate-180' : ''
            } ${
              row.children.has_nemesis || row.children.has_secrete
                ? ''
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
          <XIcon className='text-red-500 mx-auto cursor-pointer' />
        </td>
      </tr>
      <TableCollapse row={row} isCollapsed={isCollapsed} />
    </>
  )
}
