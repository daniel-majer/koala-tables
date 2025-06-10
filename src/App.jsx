import { Table } from './components/Table'
import { DataContext } from './context/TableContext'
import { use } from 'react'

function App() {
  const { tableData } = use(DataContext)

  return (
    <div className='bg-zinc-900 text-white min-h-screen pt-10 flex'>
      <Table data={tableData} />
    </div>
  )
}

export default App
