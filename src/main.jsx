import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TableContext } from './context/TableContext.jsx'

createRoot(document.getElementById('root')).render(
  <TableContext>
    <App />
  </TableContext>
)
