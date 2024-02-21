import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './components/HomePage/HomePage'
import Contactpage from './components/ContactPage/ContactPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Contactpage /> */}
    <HomePage />
  </React.StrictMode>,
)
