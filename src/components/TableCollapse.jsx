import { Table } from './Table'

export const TableCollapse = ({ row }) => {
  const childrenData = Object.values(row.children || {}).flatMap(
    child => child?.records || []
  )

  return (
    <tr>
      <td colSpan={Object.keys(row.data).length + 2}>
        <div>
          <div className='bg-zinc-800 p-4 px-30 rounded'>
            <Table data={childrenData} />
          </div>
        </div>
      </td>
    </tr>
  )
}
