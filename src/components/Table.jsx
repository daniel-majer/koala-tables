import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'

export const Table = ({ data }) => {
  if (!data || !data.length) {
    return (
      <div className='text-center text-zinc-500  flex-1 self-center'>
        No data available
      </div>
    )
  }

  const headerNames = data[0] ? Object.keys(data[0].data).concat('Delete') : []

  return (
    <table className='w-full text-center border-collapse self-start'>
      <thead>
        <tr>
          <th className='border border-zinc-700 p-2 bg-zinc-800' />
          {headerNames.map((cell, idx) => (
            <TableHeader key={idx} cell={cell} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => {
          return <TableRow key={idx} row={row} />
        })}
      </tbody>
    </table>
  )
}
