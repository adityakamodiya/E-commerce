import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
