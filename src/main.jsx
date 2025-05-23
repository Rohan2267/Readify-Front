import { StrictMode } from 'react'
import React from 'react'
import './index.css'
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./store/index.js"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
)
