import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.jsx'
import './assets/css/index.css'

// ? if I would be going to extend the app I would implement
// redux as a state manager and
// react-router-dom for routing
// and other different tools

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
