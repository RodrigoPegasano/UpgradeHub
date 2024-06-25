// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

// App
import App from './App.jsx'

// CSS
import './index.css'

// Context
import { SessionProvider } from './contexts/SessionContext.jsx'
import { CookieAcceptProvider } from './contexts/CookieAcceptContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <CookieAcceptProvider>
      <SessionProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SessionProvider>
      </CookieAcceptProvider>
    </CookiesProvider>
  </React.StrictMode>,
)
