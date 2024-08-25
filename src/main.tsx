import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoApps from './components/TodoApps'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApps/>
  </StrictMode>,
)
