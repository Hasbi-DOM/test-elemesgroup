import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles'
import './index.css'
import theme from './assets/js/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<ThemeProvider theme={theme}>
    <App />
	</ThemeProvider>
  </React.StrictMode>,
)
