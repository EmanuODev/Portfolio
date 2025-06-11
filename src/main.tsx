import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LightMode } from './pages/pageLightMode.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LightMode/>
  </React.StrictMode>,
)
