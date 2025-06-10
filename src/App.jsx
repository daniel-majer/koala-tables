import Table from './components/Tablev2'
import { data } from './data'

function App() {
  return (
    <div className='min-h-screen bg-zinc-900 text-white'>
      <Table data={data}>
        <Table.Header />
        <Table.Body />
      </Table>
    </div>
  )
}

export default App
