import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import"./index.css";
import AmazonPage from './Amazonpage/index.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AmazonPage/>
  </StrictMode>,
)
