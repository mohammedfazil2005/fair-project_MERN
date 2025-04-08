import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

import ContextProject from './contexts/ContextApi.jsx'

import AuthenticationContext from './contexts/AuthenticationContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthenticationContext>
    <ContextProject  >
      <App />
      </ContextProject>
      </AuthenticationContext>
    </BrowserRouter>
  </StrictMode>,
)
