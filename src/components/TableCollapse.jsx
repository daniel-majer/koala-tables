import { Table } from './Table'

export const TableCollapse = ({ row, isCollapsed }) => {
  console.log(row.children.has_nemesis?.records)

  const data =
    row.children.has_nemesis?.records || row.children.has_secrete?.records || []

  return (
    <tr>
      <td colSpan={Object.keys(row.data).length + 2}>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isCollapsed ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='bg-zinc-800 p-4 px-40 rounded'>
            <Table data={data} />
          </div>
        </div>
      </td>
    </tr>
  )
}
