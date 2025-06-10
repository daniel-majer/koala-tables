import { SquareChevronDownIcon } from 'lucide-react'

export const TableCollapseIcon = ({ row, isCollapsed, setIsCollapsed }) => {
  return (
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
  )
}
