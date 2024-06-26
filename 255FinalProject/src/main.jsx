import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider, } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#526aa6',
    },
    secondary: {
      main: '#e23213',
    },
  },

  typography: {
h1: {fontSize: "3rem",
     fontWeight: 600,
},
h2: {fontSize: "1.75rem",
     fontWeight: 600,
},
h3: {fontSize: "1.5rem",
     fontWeight: 600,
},


  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> <App /></ThemeProvider>
   
  </React.StrictMode>,
)
