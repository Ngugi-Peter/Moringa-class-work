import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




import Amazonpage from './Amazonpage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Amazonpage/>
  </StrictMode>,
)
