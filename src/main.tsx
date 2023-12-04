import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
     <React.Fragment>
     <CssBaseline />
     <BrowserRouter>
    <App /> 
     </BrowserRouter>
     </React.Fragment>
     </ThemeProvider>
  </React.StrictMode>,
)
