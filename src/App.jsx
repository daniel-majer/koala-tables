import { Table } from './components/Table'
import { useTableContext } from './context/TableContext'

function App() {
  const { tableData } = useTableContext()

  return (
    <div className='bg-zinc-900 text-white min-h-screen flex'>
      <Table data={tableData} />
    </div>
  )
}

export default App
