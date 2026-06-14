import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Start from './Start.jsx'
import Child from './Child.jsx'
import App from './App.jsx'
import Tamrin2 from './TamrinTwo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) 



