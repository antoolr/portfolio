import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Componente proviene de la exportación del App.tsx
    todo en el HTML que devuelve el <App></App> se sustituye
    en el etiqueta <App /> */}
    <App />
  </StrictMode>,
)