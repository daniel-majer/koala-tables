import { data } from './data'
import { Table } from './components/Table'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState(data)

  console.log(items)

  return (
    <div className='bg-zinc-900 text-white min-h-screen pt-10'>
      <Table data={data} />
    </div>
  )
}

export default App
